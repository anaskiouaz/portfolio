const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const url = 'file://' + process.cwd().replace(/\\/g, '/') + '/index.html';
  await page.goto(url, { waitUntil: 'networkidle' });
  const out = {};

  // Language toggle
  const navTitleBefore = await page.textContent('h2[data-i18n="skills.title"]');
  const langBtnBefore = await page.textContent('#langToggle .lang-text');
  await page.click('#langToggle');
  await page.waitForTimeout(200);
  const navTitleAfter = await page.textContent('h2[data-i18n="skills.title"]');
  const langBtnAfter = await page.textContent('#langToggle .lang-text');
  out.langToggle = { titleBefore: navTitleBefore.trim(), titleAfter: navTitleAfter.trim(), btnBefore: langBtnBefore.trim(), btnAfter: langBtnAfter.trim() };

  // Carousel next
  const trackTransformBefore = await page.evaluate(() => document.getElementById('interestsTrack').style.transform || 'none');
  await page.click('#nextInterest');
  await page.waitForTimeout(600);
  const trackTransformAfter = await page.evaluate(() => document.getElementById('interestsTrack').style.transform || 'none');
  out.carousel = { before: trackTransformBefore, after: trackTransformAfter };

  // Search overlay opens
  await page.click('#searchTrigger');
  await page.waitForTimeout(300);
  const searchOpen = await page.evaluate(() => {
    const o = document.getElementById('searchOverlay');
    return o ? getComputedStyle(o).display !== 'none' && (o.classList.contains('active') || getComputedStyle(o).opacity !== '0') : false;
  });
  out.searchOpens = searchOpen;

  // window.projectsSystem exists
  out.projectsSystemGlobal = await page.evaluate(() => typeof window.projectsSystem === 'object' && window.projectsSystem !== null);

  await browser.close();
  console.log(JSON.stringify(out, null, 2));
})();
