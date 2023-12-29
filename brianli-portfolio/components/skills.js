import React from "react";
import SectionHeading from "../components/sectionheading";
import { skillsList } from "@/lib/data";

export default function Skills() {
  return (
    <div
      className="bg-slate-700 flex flex-col items-center justify-center text-white scroll-mt-52"
      id="skills"
    >
      <h1 className="text-5xl text-white text-center mt-8 mb-9">Skills</h1>
      <div className="text-center mb-28 max-w-[53rem]">
        {skillsList.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-2xl text-white py-5 underline">
              {category.title}
            </h2>
            <ul className="text-center flex justify-center gap-2 text-lg">
              {category.skills.map((skill, skillIndex) => (
                <li
                  className="bg-white border text-slate-700 rounded-xl text-sm px-3 py-1 dark:bg-white/10 dark:text-white/80"
                  key={skillIndex}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
