/* eslint-disable react/prop-types */

import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Loader from "./components/loader/loading";
import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Role from "./components/homepage/Role";
import Skills from "./components/homepage/Skills";
import Preloading from "./components/ui/Preloading";
import "../style.css";
import SocialLinks from "./components/homepage/SocialLinks";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]);
  // const [loaderFinished, setLoaderFinished] = useState(false);
  // const [timeline, setTimeline] = useState(null);

  // loader animation
  // useLayoutEffect(() => {
  //   const context = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       onComplete: () => setLoaderFinished(true), // Set loaderFinished to true after timeline completes
  //     });
  //     setTimeline(tl);
  //   });

  //   return () => context.revert();
  // }, []);

  // Scrub animation of section headings
  useEffect(() => {
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");
      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          end: "bottom 550px",
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",
        });
      });
    });
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <div className="max-w-screen-full overflow-hidden bg-secondary-100">
      {/* {!loaderFinished ? (
        <Loader timeline={timeline} />
      ) : ()} */}

      {loading ? (
        <Preloading setLoading={setLoading} />
      ) : (
        <>
          <NavBar sectionRefs={sectionRefs.current} />
          <Hero />
          <main className="px-5 md:px-10 xl:px-20 2xl:px-28">
            <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />
<<<<<<< HEAD
            <About title={"about me"} />
            <Skills
              forwardedRef={(el) => (sectionRefs.current[1] = el)}
              title={"my skills"}
            />
            <SocialLinks title={"social-links"} />
=======
            <About title={"About Me"} />
            <Skills forwardedRef={(el) => (sectionRefs.current[1] = el)} title={"My Skills"} />
>>>>>>> 1c4a1caaded9eeef463814fde9fe5e552376dc17
          </main>
        </>
      )}
    </div>
  );
};

export default App;
