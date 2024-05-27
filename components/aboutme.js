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
    <main>
      <div className="flex px-10">
        <div className="ml-10">
          <div className="inline-block max-w-[520px] max-h-[667px] relative overflow-hidden ">
            <Image
              src={"/websitepic2.jpg"}
              width={520}
              height={500}
              alt="Brian Li"
              className="object-cover transition-all duration-300 transform hover:scale-110"
            />
          </div>
          <div className="text-5xl flex justify-start gap-28 py-10 text-slate-700 dark:text-white">
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
        <div className="pl-64">
          <div>
            <h2 className="text-5xl py-2">Brian Li</h2>
            <h3 className="text-2xl py-2">Developer, Student, Learner</h3>
            <p
              className="text-xl py-2 leading-loose "
              style={{ maxWidth: "600px" }}
            >
              Hello, my name is{" "}
              <span
                onMouseEnter={() => setPhotoVisible("personalphoto1")}
                onMouseLeave={() => {
                  setPhotoVisible(null);
                  setCurrPhoto("personalphoto1");
                }}
                className="underline text-blue-800 dark:text-blue-100"
              >
                Brian Li,
              </span>{" "}
              a first year Computer Engineering student at the University of
              Waterloo. My passions lie in both and firmware AI development; I'm keen on{" "}
              <span
                onMouseEnter={() => setPhotoVisible("personalphoto2")}
                onMouseLeave={() => {
                  setPhotoVisible(null);
                  setCurrPhoto("personalphoto2");
                }}
                className="underline text-blue-800 dark:text-blue-100"
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
