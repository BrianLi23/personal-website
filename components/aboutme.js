"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

// Used for the image viewing feature
const imageMap = {
  github: "/githubprofile.jpg",
  linkedin: "/linkedinprofile.jpg",
  instagram: "/instagramprofile.png",
  white: "/white.png",
  personalphoto1: "/websitepic1.jpg",
  personalphoto2: "/websitepic5.jpg",
};

export default function AboutMe() {
  const [photoVisible, setPhotoVisible] = useState(null);
  const [currPhoto, setCurrPhoto] = useState("white");
  return (
    <main className="px-10 md:px-2">
      <div className="flex flex-col md:flex-row md:px-12 md:mb-12">
        <div className="md:ml-10">
          <div className="inline-block max-w-full max-h-full relative overflow-hidden ">
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
              onMouseEnter={() => setPhotoVisible("github")}
              onMouseLeave={() => {
                setPhotoVisible(null);
                setCurrPhoto("github");
              }}
            >
              <AiFillGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/brian-li2028/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setPhotoVisible("linkedin")}
              onMouseLeave={() => {
                setPhotoVisible(null);
                setCurrPhoto("linkedin");
              }}
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
              href="https://www.instagram.com/brixn.li/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setPhotoVisible("instagram")}
              onMouseLeave={() => {
                setPhotoVisible(null);
                setCurrPhoto("instagram");
              }}
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
        <div className="py-8 md:py-0 md:pl-64">
          <div>
            <h2 className="text-5xl py-2 md:text-5xl">Brian Li</h2>
            <h3 className="text-2xl py-2 md:text-2xl">Developer, Student, Learner</h3>
            <p
              className="leading-loose py-2 md:text-xl md:leading-loose "
              style={{ maxWidth: "600px" }}
            >
              Hello, my name is{" "}
              <span
                onMouseEnter={() => setPhotoVisible("personalphoto1")}
                onMouseLeave={() => {
                  setPhotoVisible(null);
                  setCurrPhoto("personalphoto1");
                }}
                className=" text-blue-600 dark:text-blue-100"
              >
                Brian Li,
              </span>{" "}
              a second year Computer Engineering student at the University of
              Waterloo. My passions lie in both firmware and AI development; I'm keen on{" "}
              <span
                onMouseEnter={() => setPhotoVisible("personalphoto2")}
                onMouseLeave={() => {
                  setPhotoVisible(null);
                  setCurrPhoto("personalphoto2");
                }}
                className=" text-blue-600 dark:text-blue-100"
              >
                connecting with others{" "}
              </span>
              and learning new things.
            </p>
          </div>
          <div>
            <Image
              src={photoVisible ? imageMap[photoVisible] : imageMap[currPhoto]}
              width={400}
              height={500}
              alt="photo"
              className={`transition-all content-center m-10 mt-15 duration-500 ${
                imageMap[photoVisible]
                  ? "opacity-100 scale-100 duration-500"
                  : "opacity-0 scale-90 pointer-events-none duration-500"
              }`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
