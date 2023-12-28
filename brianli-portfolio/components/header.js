"use client";
import React from "react";
import useDarkMode from "./darkmode";
import Image from "next/image";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <nav className="px-20 py-10 mb-12 flex justify-between">
      {darkMode ? (
        <Image src={"/websitelogo.png"} width={200} height={200} />
      ) : (
        <Image src={"/websitelogodark.png"} width={200} height={200} />
      )}
      <ul className="font-nexa flex items-center">
        <button type="button" onClick={toggleDarkMode}>
          {darkMode ? (
            <BsFillSunFill
              className="cursor-pointer text-2xl relative mb-20"
              color="white"
            />
          ) : (
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl relative mb-20"
              color="rgb(51,65,85)"
            />
          )}
        </button>
        <li className="relative mb-20">
          <a
            className="bg-gradient-to-r from-slate-300 to-slate-400 text-white px-4 py-2 rounded-md ml-8"
            href="/BrianLiResume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
