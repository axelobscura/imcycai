export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-1 flex-col items-center justify-center font-sans">
      <div className="">
        <div className="flex flex-row items-center justify-center w-full gap-2 border-2 border-slate-500 bg-slate-800/80 rounded-md p-2">
          <input type="text" placeholder="Buscar" className="w-full p-4 rounded-mdtext-white" />
          <button className="w-full p-4 rounded-md bg-blue-500 text-white block text-center">
            <span className="text-center font-bold text-lg">BUSCAR</span>
          </button>
        </div>
      </div>
    </div>
  );
}