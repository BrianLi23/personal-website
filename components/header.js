"use client";
import React from "react";
import useDarkMode from "./darkmodetoggle";
import Image from "next/image";
import Link from 'next/link';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import TransitionLink from "./transitionlink";
import { usePathname } from "next/navigation";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const pathname = usePathname(); // Get current path

  // Function to check if a link is active
  const isActive = (href) => {
    if (href === "/" && pathname === "/") {
      return true;
    }
    if (href !== "/" && pathname.startsWith(href) && href !== "/BrianLiResume1.pdf") {
      return true;
    }
    return false;
  };

  // Menu items
  const menuItems = [
    { href: "/", label: "info." },
    { href: "/work", label: "work." },
    { href: "/blog", label: "blog." }
  ];

  return (
    <nav className="flex flex-row justify-between px-12 py-8 md:px-28">
      <div className="flex flex-col gap-8 items-center md:py-10 md:flex-col md:justify-between md:gap-8">
        {darkMode === "light" ? (
          <Image
            src={"/file.png"}
            width={215}
            height={215}
            alt="website logo"
          />
        ) : (
          <Image
            src={"/websitelogodark.png"}
            width={200}
            height={200}
            alt="website logo dark mode"
          />
        )}
      </div>
      <div className="flex gap-10 pl-10 md:gap-20 md:my-20">
        {menuItems.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <TransitionLink href={item.href} label={item.label} />
            {isActive(item.href) && (
              <div className="w-full h-[1.5px] bg-slate-700 dark:bg-white mt-1"></div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}