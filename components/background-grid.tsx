export function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem] border border-white/6"
    >
      <div className="grid-noise absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(59,130,246,0.16)] to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(59,130,246,0.10)] blur-3xl" />
    </div>
  );
}

