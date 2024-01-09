"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import useDarkMode from "@/components/darkmodetoggle";
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
  return (
    <div className="font-nexa bg-white text-slate-700 dark:bg-slate-700 dark:text-white">
      <Head>
        <title>Brian Li's Portfolio</title>
        <meta name="description" content="  "></meta>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <main className="">
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
          <Skills />
          <SectionHeading>Timeline</SectionHeading>
          <Timeline />
          <Footer />
        </motion.section>
      </main>
    </div>
  );
}
