// Oscilloscope style view of a CAN frame, zoomed so half a frame is visible at a time.
// The trace shows the real bits of `message` (ASCII, MSB first), followed by
// recessive idle bits so the loop has a visible gap.
const FRAME_ID = "0x7E0";
const STEP = 6;
const HIGH = 6;
const LOW = 30;
const IDLE_BITS = 11;

function encode(message: string) {
  const bytes = Array.from(message.slice(0, 8), (char) => char.charCodeAt(0) & 0xff);
  const bits = bytes.flatMap((byte) => Array.from(byte.toString(2).padStart(8, "0"), Number));
  return { bytes, bits: [...bits, ...Array<number>(IDLE_BITS).fill(1)] };
}

function tracePath(bits: number[]) {
  const level = (bit: number) => (bit ? HIGH : LOW);
  // Start at the last level so two copies join seamlessly when the trace scrolls.
  return bits.reduce(
    (d, bit, i) => `${d} V${level(bit)} H${(i + 1) * STEP}`,
    `M0 ${level(bits[bits.length - 1])}`,
  );
}

type Props = {
  message: string;
};

export function Scope({ message }: Props) {
  const { bytes, bits } = encode(message);
  const width = bits.length * STEP;
  const d = tracePath(bits);
  const hex = bytes.map((byte) => byte.toString(16).toUpperCase().padStart(2, "0")).join(" ");

  const copy = (
    <svg viewBox={`0 0 ${width} 36`} preserveAspectRatio="none" className="h-full w-1/2 shrink-0">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );

  return (
    <figure className="font-mono text-xs">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted">
        <span>CH1 · CAN · 500 kbit/s</span>
        <span className="flex items-center gap-1.5 text-accent">
          <span className="scope-rx size-1.5 rounded-full bg-accent" aria-hidden="true" />
          RX
        </span>
      </div>

      <div className="relative mt-3 h-9 overflow-hidden text-accent" aria-hidden="true">
        <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-border" />
        <div className="scope-sweep h-full">
          <div className="scope-scroll flex h-full w-[400%]">
            {copy}
            {copy}
          </div>
        </div>
      </div>

      <figcaption className="mt-3 space-y-0.5">
        <p>
          <span className="text-muted">ID</span> {FRAME_ID} <span className="ml-2 text-muted">DLC</span>{" "}
          {bytes.length}
        </p>
        <p className="break-all">
          {hex} <span className="text-accent">&quot;{message}&quot;</span>
        </p>
      </figcaption>
    </figure>
  );
}
