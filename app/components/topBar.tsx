import Link from "next/link";
import Image from "next/image";
import { TbUserCircle } from "react-icons/tb";
import { SiAirplayaudio } from "react-icons/si";
import { TfiEmail } from "react-icons/tfi";

export default function TopBar() {
    return (
      <div className="grid grid-cols-[2fr_10fr_1fr] fixed top-0 left-0 w-full">
        <div className="flex items-center justify-center p-2">
            <Link href="/" className="block">
                <Image 
                    src="/logo-imcyc.svg" 
                    alt="Instituto Mexicano del Cemento y del Concreto" 
                    width={400} 
                    height={200} 
                    className="block w-auto h-15"
                />
            </Link>
        </div>
        <div className="flex justify-center bg-slate-900 items-center p-2 rounded-tab-inverted w-full px-50">
            <div className="grid grid-cols-[6fr_1fr] items-center justify-center w-full gap-2 border-2 border-slate-700 bg-slate-800/80 rounded-full p-0 p-1 pl-5 mt-2">
                <input type="text" placeholder="Buscar contenido" className="w-full p-0 rounded-mdtext-white" />
                <button className="w-full p-1 rounded-full bg-blue-500 text-white block text-center">
                    <span className="text-center font-bold text-lg">BUSCAR</span>
                </button>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <SiAirplayaudio size={25} className="text-white mr-3" />
            <TfiEmail size={25} className="text-white mr-2" />
            <Link href="/">
                <TbUserCircle size={30} />
            </Link>
        </div>
      </div>
    );
  }
  