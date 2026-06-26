const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch();
  const errors = [];
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push('PAGEERR: ' + e.message));
  const url = 'file://' + process.cwd().replace(/\\/g, '/') + '/index.html';
  await page.goto(url, { waitUntil: 'networkidle' });
  // Slowly scroll to trigger every IntersectionObserver reveal
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 200)); }
    await new Promise(r => setTimeout(r, 600));
    window.scrollTo(0, 0);
    await new Promise(r => setTimeout(r, 300));
  });
  await page.screenshot({ path: '.shot-desktop.png', fullPage: true });
  // Skills section close-up
  const skills = await page.$('#skills');
  if (skills) await skills.screenshot({ path: '.shot-skills.png' });
  // mobile
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(400);
  await page.screenshot({ path: '.shot-mobile.png', fullPage: true });
  await browser.close();
  console.log('CONSOLE ERRORS:\n' + (errors.length ? [...new Set(errors)].join('\n') : 'none'));
})();
