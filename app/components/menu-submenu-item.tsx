"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { IconType } from "react-icons";

type SubmenuLink = {
  label: string;
  href: string;
};

type MenuSubmenuItemProps = {
  href: string;
  icon: IconType;
  items: SubmenuLink[];
};

const CLOSE_DELAY_MS = 120;

export default function MenuSubmenuItem({
  href,
  icon: Icon,
  items,
}: MenuSubmenuItemProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  return (
    <li className="relative my-3">
      <div
        className="relative"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <Link
          href={href}
          className="relative z-10 flex items-center justify-center rounded-full bg-blue-500 p-2 text-white"
        >
          <Icon size={25} className="text-white" />
        </Link>
        <ul
          className={`absolute left-full top-1/2 z-200 min-w-[250px] -translate-y-1/2 rounded-lg border border-slate-700/80 bg-[#131822] py-1 pl-3 shadow-xl transition-opacity duration-150 ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {items.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-blue-500/30 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
