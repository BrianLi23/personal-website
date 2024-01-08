"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsList } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-52">
      {projectsList.map((project, index) => (
        <React.Fragment key={index}>
          <IndvProject {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}

function IndvProject({ title, description, tags, image, link }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <a
      href={link}
      className="group ml-[10rem] sm:mb-8 even:ml-[36rem] inline-block "
      target="_blank"
    >
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
      >
        <section
          className="bg-gray-100 dark:bg-slate-500 max-w-[60rem] border border-black/5 
    overflow-hidden sm:pr-8 relative sm:h-[30rem] group-even:pl-8 hover:bg-gray-200 transition duration-500"
        >
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[26rem]">
            <h3 className="text-2xl font-semibold dark:text-white">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              src={image}
              alt={title}
              width={500}
              height={700}
              className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition duration-500
          group-hover:-translate-x-10
          group-hover:scale-[1.04]
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-10
          group-even:group-hover:scale-[1.04]
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:-right-[intial] 
          group-even:-left-40"
            />
          </div>
        </section>
      </motion.div>
    </a>
  );
}
