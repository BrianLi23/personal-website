"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

import { FaXTwitter } from "react-icons/fa6";

// Used for the image viewing feature
const imageMap = {
  personalphoto1: "/websitepic1.jpg",
  personalphoto2: "/websitepic5.jpg",
};

export default function AboutMe() {
  const [activeImage, setActiveImage] = useState(null);

  // Handle mouse enter
  const handleMouseEnter = (imageKey) => {
    setActiveImage(imageKey);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setActiveImage(null);
  };

  return (
    <main className="px-10 md:px-2">
      <div className="flex flex-col md:flex-row md:px-12 md:mb-12">
        <div className="md:ml-10">
          <div className="inline-block max-w-full max-h-full relative overflow-hidden">
            <Image
              src={"/websitepic2.jpg"}
              width={520}
              height={500}
              alt="Brian Li"
              className="object-cover transition-all duration-300 transform hover:scale-110"
            />
          </div>
          <div className="text-5xl flex justify-start gap-14 md:gap-28 py-5 md:py-12 text-slate-700 dark:text-white">
            <a
              href="https://github.com/BrianLi23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/brianljx/"
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
              href="https://x.com/BrianLi23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="py-8 md:py-0 md:pl-64">
          <div>
            <h2 className="text-5xl py-2 md:text-5xl">Brian Li</h2>
            <h3 className="text-2xl py-2 md:text-2xl">Developer, Student, Learner</h3>
            <p
              className="leading-loose py-2 md:text-xl md:leading-loose"
              style={{ maxWidth: "600px" }}
            >
              Hello, my name is{" "}
              <span
                onMouseEnter={() => handleMouseEnter("personalphoto1")}
                onMouseLeave={handleMouseLeave}
                className="text-blue-600 dark:text-blue-100 cursor-pointer"
              >
                Brian Li,
              </span>{" "}
              a second year Computer Engineering student at the University of
              Waterloo. My passions lie in AI development and infrastructure; I'm keen on{" "}
              <span
                onMouseEnter={() => handleMouseEnter("personalphoto2")}
                onMouseLeave={handleMouseLeave}
                className="text-blue-600 dark:text-blue-100 cursor-pointer"
              >
                connecting with others{" "}
              </span>
              and learning new things.
            </p>
          </div>
          
          {/* Image container with simplified approach */}
          <div className="relative h-64 w-full md:h-96 md:w-96 my-10">
            {Object.keys(imageMap).map(key => (
              <div 
                key={key}
                className={`absolute inset-0 transition-all duration-500 ${
                  activeImage === key
                    ? "opacity-100 scale-100" 
                    : "opacity-0 scale-90"
                }`}
              >
                <Image
                  src={imageMap[key]}
                  layout="fill"
                  objectFit="contain"
                  alt={`${key} photo`}
                  priority={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}