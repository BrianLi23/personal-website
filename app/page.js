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

function Home() {
  return (
    <div className=" text-slate-700">
      <div className="bg-[#a4bbde] absolute top-[-6rem] -z-10 right-[rem] sm:h-[10.25rem] rounded-full blur-[8rem] sm:w-[105.75rem]"></div>
      <Head>
        <title>Brian Li's Portfolio</title>
        <meta name="description" content="  "></meta>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <main>
          <Header />
          <AboutMe />
          <Skills />
          <Footer />
      </main>
    </div>
  );
}

export default Home;