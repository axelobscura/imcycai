import { RiBrain2Fill } from "react-icons/ri";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center font-sans">
      <div className="w-full p-30">
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-5 text-center font-geist-sans">Bienvenido al Asistente Inteligente del Cemento y el Concreto!</h1>
          <p className="text-sm text-white font-light mb-5 text-center font-geist-sans">El asistente inteligente del Instituto Mexicano del Cemento y del Concreto es un sistema que te ayuda a encontrar la información que necesitas sobre el cemento y el concreto.</p>
          <p className="text-sm text-white font-light mb-5 text-center font-geist-sans">¿En qué te puedo ayudar?</p>
        </div>
        <div className="grid grid-cols-[11fr_1fr] items-center justify-center w-full gap-2 border-2 border-slate-500 bg-slate-800/80 rounded-full p-2 shadow-lg max-w-[80%] mx-auto">
          <input type="text" placeholder="Buscar" className="w-full p-1 pl-5 rounded-mdtext-white" />
          <button className="flex justify-center items-center w-full p-1 rounded-full bg-blue-500 text-white text-center">
            <span className="text-center font-bold">
              <RiBrain2Fill size={30} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}