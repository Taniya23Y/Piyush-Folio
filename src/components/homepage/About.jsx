import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "/src/assets/Images/about-img.jpeg";

import Heading from "../ui/Heading";

const About = () => {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section
      id="about"
      ref={aboutSection}
      aria-label="about me"
      className="pt-20"
    >
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="900"
            alt="piyush-image"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
            <p
              ref={body}
              className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0"
            >
              A dedicated Java developer 💻 with a passion for crafting
              efficient and robust backend systems.
              <br></br>
              <br></br> Currently, I am expanding my skill set by delving into
              Data Structures and Algorithms (DSA). I believe that a solid
              understanding of DSA 📚 is crucial for optimizing performance &
              solving complex problems efficiently.🔍
              <br></br>
              <br></br>
              In addition to my Java expertise, I am passionate about learning
              Android development to build innovative mobile applications. 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
