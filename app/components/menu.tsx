import Link from "next/link";
import { FaFistRaised } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { RiImageCircleLine } from "react-icons/ri";
import { FaDotCircle } from "react-icons/fa";



export default function Menu() {
    return (
      <div className="flex justify-center items-center min-h-screen w-full flex-1 flex-col items-center justify-center font-sans p-3">
        <div></div>
        <div className="flex justify-center items-center p-2 h-full rounded-tab-left alt">
            <ul className="ml-2">
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <AiFillHome size={25} className="text-white" />
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <RiImageCircleLine size={25} className="text-white" />
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <FaDotCircle size={25} className="text-white" />
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <FaFistRaised size={25} className="text-white" />
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <FaFistRaised size={25} className="text-white" />
                </Link>
              </li>
            </ul>
        </div>
        <div></div>
      </div>
    );
  }
  