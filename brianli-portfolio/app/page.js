"use client";
import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import useDarkMode from "@/components/darkmode";
import Header from "@/components/header";

export default function Home() {
  const { darkMode } = useDarkMode();
  // This ensures that the component re-renders when darkMode changes
  useEffect(() => {
    // This forces a re-render when darkMode changes
    console.log("something changed");
  }, [darkMode]);

  return (
    <div
      className={`font-nexa ${darkMode ? "dark" : ""} ${
        darkMode ? "text-white" : "text-slate-700"
      }`}
    >
      <Head>
        <title>Brian Li's Portfolio</title>
        <meta name="description" content="Generated by ajdsfkk"></meta>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <main className="bg-white px-10 dark:bg-slate-700">
        <section className="min-h-screen">
          <Header />
          <div className="flex">
            <span className="relative max-w-xl overflow-hidden ml-10 ">
              <Image
                src={"/websitepic2.jpg"}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-all duration-300 transform hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </span>
            <span className="pl-64">
              <h2 className="text-5xl py-2">Brian Li</h2>
              <h3 className="text-2xl py-2">Developer, Student, Learner</h3>
              <p></p>
            </span>
          </div>
          <div className="ml-10 ">
            <div className="text-5xl flex justify-start gap-28 py-10 text-slate-700">
              <a
                href="https://github.com/BrianLi23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/brian-li2028/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>

              <a
                href="mailto:b77li@uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>

              <a
                href="https://www.instagram.com/brixn.li/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
