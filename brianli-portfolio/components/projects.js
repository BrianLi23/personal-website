import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <React.Fragment>
      <div className="mt-16 text-center content-center">
        <Image
          src={"/longdatavisual.png"}
          width={1200}
          height={500}
          className="m-auto block transition-all duration-300 transform hover:scale-95"
        />
        <h1 className="text-2xl mt-8 inline-block text-left ">
          Data Visualization Software
        </h1>
        <h2 className="text-2xl text-slate-300 mt-1 block text-center ">
          Java, JavaFx, Object-Oriented Programming
        </h2>
      </div>
      <div className="flex my-48 gap-x-6 justify-center mt-36">
        <div>
          <Image
            src={"/maskpic.jpg"}
            width={585}
            height={550}
            className="ml-10 transition-all duration-300 transform hover:scale-95"
          />
          <h1 className="text-2xl mt-8 block text-left ml-10 ">
            "Are Mask Masking Your Voice?"
          </h1>
          <h2 className="text-2xl text-slate-300 mt-1 block ml-10">
            Audacity, Adobe Premiere Pro, Figma
          </h2>
        </div>
        <div>
          <Image
            src={"/sumobot.jpg"}
            width={585}
            height={500}
            className="mr-12 transition-all duration-300 transform hover:scale-95"
          />
          <h1 className="text-2xl mt-8 block text-left">Sumo Bot</h1>
          <h2 className="text-2xl text-slate-300 mt-1 block ">
            Arduino, Python, SSH-Client, Raspberry Pi
          </h2>
        </div>
      </div>
    </React.Fragment>
  );
}
