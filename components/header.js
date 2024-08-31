"use client";

import React from "react";
import useDarkMode from "./darkmodetoggle";
import Image from "next/image";
import Link from 'next/link';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import TransitionLink from "./transitionlink";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
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
    <TransitionLink href="/BrianLiResume1.pdf" label="resume."/>
    <TransitionLink href="/" label="info."/>
    <TransitionLink href="/work" label="work."/>
    <TransitionLink href="/work" label="blog."/>
  </div>

  </nav>

  );
}
