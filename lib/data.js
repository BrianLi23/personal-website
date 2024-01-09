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

export const projectsList = [
  {
    title: "Data Visualization Software",
    description:
      "A JavaFx application that visualizes data from a CSV file using JavaFx. The application allows users to select the type of graph they want to visualize the data with, and also allows them to customize the graph.",
    tags: ["Java", "JavaFx", "Object-Oriented Programming"],
    image: "/datavisualization.jpg",
    link: "https://github.com/BrianLi23/data-visualization-project",
  },
  {
    title: '"Are Mask Masking Your Voice?"',
    description:
      "A science fair study project that discusses and examine the relationship between one’s sound output (amplitude and frequency) and their assoicated mask.",
    tags: ["Figma", "Adobe Premiere Pro", "Audacity"],
    image: "/sciencefair.jpg",
    link: "https://projectboard.world/ysc/project/are-masks-masking-your-voice",
  },
  {
    title: '"Sumo-Bot"',
    description:
      'An autonomous "sumo-bot" built using an Arduino and Raspberry Pi. The robot was also controllable through a website hosted on the Raspberry Pi.',
    tags: ["Arduino", "SSH Client", "Python", "Raspberry Pi"],
    image: "/sumobot.jpg",
    link: "https://github.com/BrianLi23/Sumo-bot",
  },
  {
    title: "Sparse Autoencoder",
    description:
      "Built an autoencoder neural network that reconstructs the CICIoT2023 to reduce its dataset while maintaining important features.",
    tags: ["Python", "PyTorch", "TensorFlow", "Machine Learning"],
    image: "/LearningCurve33.png",
    link: "https://github.com/BrianLi23/Sparse-Autoencoder/blob/main/wat-ai-sparse-autoencoder.ipynb",
  },
];
