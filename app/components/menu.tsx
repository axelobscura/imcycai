import Link from "next/link";
import { FaFistRaised } from "react-icons/fa";

export default function Menu() {
    return (
      <div className="flex justify-center items-center min-h-screen w-full flex-1 flex-col items-center justify-center font-sans ml-3">
        <div className="flex justify-center items-center rounded-lg p-4 w-full">
            <ul>
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
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <FaFistRaised size={25} className="text-white" />
                </Link>
              </li>
            </ul>
        </div>
      </div>
    );
  }
  