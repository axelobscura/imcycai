"use client";

import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { RiImageCircleLine } from "react-icons/ri";
import { FaDotCircle } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdOutlineExitToApp } from "react-icons/md";
import MenuSubmenuItem from "@/app/components/menu-submenu-item";

export default function Menu() {
    return (
      <div className="relative z-50 flex min-h-screen w-full flex-1 flex-col items-center justify-center overflow-visible font-sans p-3">
        <div></div>
        <div className="relative flex h-full items-center justify-center p-2">
            <div
              className="pointer-events-none absolute inset-0 rounded-tab-left alt"
              aria-hidden
            />
            <ul className="relative z-10 ml-2">
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <AiFillHome size={25} className="text-white" />
                </Link>
              </li>
              <MenuSubmenuItem
                href="/dashboard"
                icon={RiImageCircleLine}
                items={[
                  { label: "Tecnología del concreto", href: "/dashboard" },
                  { label: "Certificaciones IMCYC OCEPER", href: "/dashboard" },
                  { label: "Certificaciones ACI", href: "/dashboard" },
                  { label: "Temas selectos", href: "/dashboard" },
                ]}
              />
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <FaDotCircle size={25} className="text-white" />
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <PiUsersThreeFill size={25} className="text-white" />
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <FaBook size={25} className="text-white" />
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <IoPlayCircleOutline size={25} className="text-white" />
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="flex items-center justify-center block p-2 rounded-full bg-blue-500 text-white text-center my-3">
                  <MdOutlineExitToApp size={25} className="text-white" />
                </Link>
              </li>
            </ul>
        </div>
        <div></div>
      </div>
    );
  }
  