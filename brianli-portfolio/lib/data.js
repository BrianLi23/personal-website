import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GiNewBorn } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";

export const sectionLinks = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Timeline",
    hash: "#timeline",
  },
];

export const timelineData = [
  {
    title: "Canadian Citizen",
    location: "Born in Toronto, Ontario, Canada",
    date: "June 18, 2005",
    description:
      "Chinese Canadian | Proficient in English and Conversational Chinese",
    icon: <GiNewBorn />,
  },
  {
    title: "Alumni of St. Augustine Catholic High School",
    location: "Markham, Ontario",
    description: "Graduated from the STEM+ Focused Program",
    icon: <FaGraduationCap />,
    date: "2019 - 2023",
  },
  {
    title: "Undergraduate Student",
    location: "University of Waterloo, Ontario",
    description: " Bachelor of Applied Science in Computer Engineering",
    icon: <FaUniversity />,
    date: "2023 - 2028",
  },
];

export const skillsList = [
  {
    title: "Programming Languages",
    skills: ["C++", "Java", "JavaFx", "Python", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "Audacity", "Adobe Premiere Pro"],
  },
  {
    title: "Firmware",
    skills: ["Arduino", "Raspberry Pi", "STM32CUBE"],
  },
];
