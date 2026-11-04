'use client';

export function BlueprintTrace() {
  return (
    <div className="blueprint-trace" aria-hidden="true">
      <svg viewBox="0 0 120 1800" preserveAspectRatio="none">
        <path d="M60 0 V145 Q60 170 38 192 T60 250 V490 Q60 520 82 542 T60 600 V860 Q60 890 38 912 T60 970 V1250 Q60 1280 82 1302 T60 1380 V1800" />
      </svg>
      {[145, 490, 860, 1250].map((top) => <span className="trace-node" style={{ top: `${(top / 1800) * 100}%` }} key={top} />)}
    </div>
  );
}
