"use client"
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectBox from "./projectbox";

function Projects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Only register the plugin once
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  // Handle resize with debounce for better performance
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Debounce resize event
    let resizeTimer;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Animation setup with cleanup
  useEffect(() => {
    // Skip animation setup on mobile
    if (isMobile || !sectionRef.current || !triggerRef.current) return;

    const ctx = gsap.context(() => {
      const animation = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-300vw",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1, // Improves pin performance
            fastScrollEnd: true, // Better performance for fast scrolling
            invalidateOnRefresh: true, // Recalculate on resize
          },
        }
      );

      return () => {
        // Ensure cleanup
        animation.kill();
        ScrollTrigger.getAll().forEach(st => st.kill());
      };
    });

    return () => ctx.revert(); // This handles proper cleanup
  }, [isMobile]);

  // Project data - move outside the render function to avoid re-creating on each render
  const projects = [
    {
      title: "Scyta",
      tags: ["Tauri", "Groq", "Faiss"],
      comment: "\"Scyta, run rm -rf ~/\"",
      description: "A computer software built with multi-agent capabilties that can concurrently process and handle your files systems. Allowing for searching, indexing, and retrieving files with ease.",
      imageUrl: "/scyta.png",
      projectUrl: "https://github.com/BrianLi23/scyta"
    },
    {
      title: "Spotify-Roots",
      tags: ["Web Dev", "RAG Approach", "Llama-cpp"],
      comment: "\"That's a double entendre\"",
      description: "Ever wondered the context and backstory behind your favourite artists, albums and tracks? Leveraging song data and sentiments, the website can generate the origin of all your desired tracks.",
      imageUrl: "/spotify-roots.png",
      projectUrl: "https://github.com/BrianLi23/spotify-roots"
    },
    {
      title: "Autoencoder",
      tags: ["Pytorch", "DDP"],
      comment: "\"Dataset, minimize\"",
      description: "Built both denoising and sparse autoencoders utilizing Distributed Data Parallel (DDP) for training and Optuna for hyperparameter optimization.",
      imageUrl: "/sparseautoencoder.png",
      projectUrl: "https://github.com/BrianLi23/sparse-autoencoder"
    },
    {
      title: "Go-neural",
      tags: ["Golang"],
      comment: "\"Overcomplicated neural network\"",
      description: "A fully from scratch built implementation of neural network with concurrent training and processing written completely in Golang.",
      imageUrl: "/golang.jpg",
      projectUrl: "https://github.com/BrianLi23/go-neural"
    },
  ];

  // Mobile view renders a regular vertical layout
  if (isMobile) {
    return (
      <div className="flex flex-col gap-8 py-10 px-4">
        {projects.map((project, index) => (
          <ProjectBox key={index} {...project} />
        ))}
      </div>
    );
  }

  // Desktop view with horizontal scroll
  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef} className="scroll-trigger">
        <div ref={sectionRef} className="scroll-section-inner">
          {projects.map((project, index) => (
            <div key={index} className="scroll-section">
              <ProjectBox {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;