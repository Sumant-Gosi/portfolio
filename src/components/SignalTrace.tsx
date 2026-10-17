// Decorative CAN style bit trace for the hero spec panel.
const bits = [1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0];
const step = 16;
const high = 6;
const low = 30;

const path = bits.reduce((d, bit, i) => {
  const y = bit ? high : low;
  return `${d} V${y} H${(i + 1) * step}`;
}, `M0 ${bits[0] ? high : low}`);

export function SignalTrace() {
  return (
    <svg
      viewBox={`0 0 ${bits.length * step} 36`}
      className="h-9 w-full text-accent"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="18" x2={bits.length * step} y2="18" stroke="var(--border)" strokeDasharray="2 4" />
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
