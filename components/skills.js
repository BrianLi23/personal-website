import React from "react";
import SectionHeading from "./sectionheading";
import { skillsList } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <div
      className="bg-slate-700 dark:bg-white flex flex-col items-center justify-center scroll-mt-52 md:my-12 pt-7"
      id="skills"
    >
      <h1 className="text-5xl text-white text-center mt-8 mb-9 dark:text-slate-700">
        Skills
      </h1>
      <div className="text-center mb-28 max-w-[53rem]">
        {skillsList.map((category, categoryIndex) => (
          <div key={categoryIndex} >
            <h2 className="text-2xl dark:text-slate-700 text-white py-5 underline">
              {category.title}
            </h2>
            <ul className="md:text-center md:flex md:justify-center md:gap-2 md:text-lg space-y-4 md:space-y-0">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  className="bg-white border text-slate-700 rounded-xl text-sm px-3 py-1 dark:bg-slate-700 dark:text-white"
                  key={skillIndex}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={skillIndex}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
