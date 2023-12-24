import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GiNewBorn } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";

export const timelineData = [
  {
    title: "Born in Toronto, Ontario, Canada",
    location: "Markham, Ontario",
    date: "June 18 | 2005",
    description: "Graduate from the STEM+ Focused Program",
    icon: <GiNewBorn />,
  },
  {
    title: "Graduated from St. Augustine Catholic High School",
    location: "Markham, Ontario",
    description: "Graduate from the STEM+ Focused Program",
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
