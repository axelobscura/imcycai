import { RiBrain2Fill } from "react-icons/ri";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center font-sans">
      <div className="w-full p-30">
        <div className="grid grid-cols-[6fr_1fr] items-center justify-center w-full gap-2 border-2 border-slate-500 bg-slate-800/80 rounded-full p-2 shadow-lg">
          <input type="text" placeholder="Buscar" className="w-full p-2 pl-5 rounded-mdtext-white" />
          <button className="w-full p-2 rounded-full bg-blue-500 text-white text-center">
            <span className="text-center font-bold">
              <RiBrain2Fill size={30} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}