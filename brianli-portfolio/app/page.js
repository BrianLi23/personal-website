"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import useDarkMode from "@/components/darkmode";
import Header from "@/components/header";
import Timeline from "@/components/timeline";
import Scroller from "@/components/scroller";
import { motion } from "framer-motion";
import SectionHeading from "@/components/sectionheading";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import AboutMe from "@/components/aboutme";
import WorkExperience from "@/components/workexperience";

export default function Home() {
  const { darkMode } = useDarkMode();
  // This ensures that the component re-renders when darkMode changes
  useEffect(() => {
    // This forces a re-render when darkMode changes
  }, [darkMode]);

  return (
    <div
      className={`font-nexa ${darkMode ? "dark" : ""} ${
        darkMode ? "text-white" : "text-slate-700"
      }`}
    >
      <Head>
        <title>Brian Li's Portfolio</title>
        <meta name="description" content="  "></meta>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <main className="bg-white dark:bg-slate-700">
        <motion.section
          className="min-h-screen"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.175 }}
        >
          <Scroller />
          <Header />
          <AboutMe />
          <SectionHeading>Projects</SectionHeading>
          <Projects />
          <div className="mt-24">
            <Skills />
          </div>
          <SectionHeading>Timeline</SectionHeading>
          <Timeline />
          <Footer />
        </motion.section>
      </main>
    </div>
  );
}
