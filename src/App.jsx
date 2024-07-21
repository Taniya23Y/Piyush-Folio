import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Role from "./components/homepage/Role";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const locomotiveScroll = new LocomotiveScroll();

  const sectionRefs = useRef([]); // Creating a sectionRefs array

  // Scrub animation of section headings
  useEffect(() => {
    //TODO Learn useContext and useRef here
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
        ScrollTrigger.refresh();
      });
    });
  }, []);

  return (
    <div className="bg-[#1E1E1E] max-w-screen-full overflow-hidden">
      <NavBar />
      <Hero />
      <About />
      <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />{" "}
      {/* forwardedRef props to pass into the child component to access the ref, then this will go into the useRef array  */}
    </div>
  );
}

export default App;
