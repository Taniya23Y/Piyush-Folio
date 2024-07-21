import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <section ref={aboutSection}>
      <div className="max-w-screen-full mx-auto bg-[#D1D1C7] px-5 py-2">
        <div className="text-center font-bold capitalize text-[#8C8C73] flex items-center justify-center gap-5">
          <Heading title="About Me" />
        </div>

        {/* image and intro  */}

        <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
          <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
            <img
              ref={profile}
              loading="lazy"
              className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
              src="../../src/assets/Images/about-img.jpeg"
              width="600"
              height="800"
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
                Android development to build innovative mobile applications. My
                enthusiasm for both Java and Android development drives me to
                continuously explore new technologies and apply my knowledge in
                real-world projects. Whether it&apos;s building scalable backend
                systems or developing engaging mobile apps, I am committed to
                making a meaningful impact in the tech community. 🚀📱
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
