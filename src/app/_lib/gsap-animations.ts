"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPAnimations = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      // Clean up animations if switching to mobile view
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      return;
    }

    // Animate sections on scroll
    const triggers = sectionRefs.current.map((section) => {
      if (!section) return null;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      tl.fromTo(section, 
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      );

      // Animate child elements with stagger
      const children = section.querySelectorAll(".animate-child");
      tl.fromTo(children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.4"
      );
      
      return tl.scrollTrigger;
    });

    return () => {
      triggers.forEach(trigger => trigger?.kill());
    };
  }, [isDesktop]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return { addToRefs };
};