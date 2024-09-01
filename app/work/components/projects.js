"use client"
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectBox from "./projectbox";


function Projects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let animation;

    if (!isMobile) {
      animation = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
    }
    return () => {
      if (animation) animation.kill();
    };
  }, [isMobile]);

  return (
    <section className={`scroll-section-outer ${isMobile ? 'mobile' : ''}`}>
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
          <ProjectBox 
          title={"Spotify-Roots"} 
          tags={["Web Dev", "RAG Approach", "Llama-cpp"]} 
          comment={"\u201CThat's a double entendre\u201C"}
          description="Ever wondered the context and backstory behind your favourite artists, albums and tracks? Leveraging up to date data of current hit songs, the website utilizes the power of LLMs and lyric analysis to generate the origin of your desired track."
          imageUrl="/spotify-roots.png"
          projectUrl="https://github.com/BrianLi23/spotify-roots"
          />
          </div>
          <div className="scroll-section">
          <ProjectBox 
          title={"Sparse Autoencoder"} 
          tags={["Pytorch", "Numpy", "Llama-cpp"]} 
          comment={"\u201CDataset, minimize\u201C"}
          description="Ever wondered the context and backstory behind your favourite artists, albums and tracks? Leveraging up to date data of current hit songs, the website utilizes the power of LLMs and lyric analysis to generate the origin of your desired track."
          imageUrl="/sparseautoencoder.png"
          projectUrl="https://github.com/BrianLi23/sparse-autoencoder"
          />
          </div>
          <div className="scroll-section">
          <ProjectBox 
          title={"Data Visualization Software"} 
          tags={["JavaFx", "Java", "Data Processing"]}
          comment={"\u201CGraphs and more graphs\u201C"} 
          description="Aiming to visualize correlation and difference of old and newly developed Artificial Intelligence systems. This data visualization project isplays the number of test parameters used in notable artificial intelligence systems as well as its domain type and entity."
          imageUrl="/longdatavisual.png"
          projectUrl="https://github.com/BrianLi23/data-visualization-project"
          />
          </div>
          <div className="scroll-section">
          <ProjectBox 
          title={"Scyta"} 
          tags={["C++", "RAG Approach", "Llama-cpp"]} 
          comment={"\u201CScyta, delete files\u201C"}
          description="Work in Progress..."
          imageUrl="/scyta.png"
          projectUrl="https://github.com/BrianLi23/scyta"
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;