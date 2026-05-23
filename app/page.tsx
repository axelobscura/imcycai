export default function Home() {
  return (
    <div className="relative flex min-h-full w-full flex-1 flex-col items-center justify-center font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bkg.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-linear-to-br from-zinc-800/80 via-stone-900/70 to-neutral-950/90"
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-20 px-20 max-w-md">
        <h1 className="text-4xl font-light text-white mb-3 text-center">
          BIENVENIDO A LA PLATAFORMA INTELIGENTE DEL CONCRETO
        </h1>
        <p className="text-sm text-white font-light mb-5">
          Instituto Mexicano del Cemento y del Concreto A.C.
        </p>
        <input
          type="text"
          placeholder="Email"
          className="w-full p-4 rounded-md mb-3 border-2 border-slate-500 bg-slate-800/80 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-md mb-3 border-2 border-slate-500 bg-slate-800/80 text-white"
        />
        <button className="w-full p-4 rounded-md bg-blue-500 text-white">
          INGRESAR
        </button>
      </div>
    </div>
  );
}
