import Image from "next/image";
import Link from "next/link";

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
      <div className="relative z-10 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg shadow-lg p-20 px-10 max-w-md">
        <Image src="/logo-imcyc.svg" alt="Logo" width={300} height={200} className="mb-5" />
        <p className="text-sm text-white font-light mb-5 text-center">
          Instituto Mexicano del Cemento y del Concreto A.C.
        </p>
        <h1 className="text-2xl font-light text-white mb-5 text-center">
          BIENVENIDO AL ASISTENTE INTELIGENTE DEL CEMENTO Y EL CONCRETO
        </h1>
        <div className="flex flex-col items-center justify-center w-full mt-5">
          <input
            type="text"
            placeholder="Email"
            className="w-full p-4 rounded-md mb-2 border-2 border-slate-500 bg-slate-800/80 text-white"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-4 rounded-md mb-3 border-2 border-slate-500 bg-slate-800/80 text-white"
          />
          <Link href="/dashboard" className="w-full p-4 rounded-md bg-blue-500 text-white block text-center">
            <span className="text-center font-bold text-lg">INGRESAR</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
