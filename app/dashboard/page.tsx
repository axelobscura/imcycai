export default function Dashboard() {
  return (
    <div className="relative flex min-h-full w-full flex-1 flex-col items-center justify-center font-sans">
      <div
        className="absolute inset-0 bg-linear-to-br from-zinc-800/80 via-stone-900/70 to-neutral-950/90"
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg shadow-lg p-20 px-10 max-w-md">
        <h1 className="text-4xl font-light text-white mb-3 text-center">
          DASHBOARD
        </h1>
        
      </div>
    </div>
  );
}
