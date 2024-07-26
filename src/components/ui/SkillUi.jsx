/* eslint-disable react/prop-types */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

export default function SkillUi({ title, description, items }) {
  const skillUi = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);
  const services = useRef(null);
  const line = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: skillUi.current,
      // markers: true,
      start: "150px bottom",
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
        )
        .to(
          line.current,
          { width: "100%", ease: "power4.inOut", duration: 1.5 },
          0.2
        )
        .to(
          services.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.5
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [skillUi]);

  return (
    <div
      ref={skillUi}
<<<<<<< HEAD
      className=" mt-10 flex justify-between items-center flex-col gap-40 md:flex-rows-3 md:gap-24 2xl:gap-36 xl:gap-32"
=======
      className=" mt-10 flex justify-between items-center flex-col gap-40 md:flex-rows-3 md:gap-24 2xl:gap-36 xl:gap-32 select-none"
>>>>>>> 1c4a1caaded9eeef463814fde9fe5e552376dc17
    >
      <div className="relative rounded-lg border bg-gradient-to-r from-[#AEAE9D] to-[#0E0E0C]  p-[2rem] w-full md:w-full lg:w-4/5">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 ">
          <div className="space-y-6 md:flex-1">
            <div className="space-y-3 2xl:space-y-10">
              <h3
                ref={heading}
                className="text-heading-3 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0"
              >
                {title}
              </h3>
              <p
                ref={body}
                className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl translate-y-10 opacity-0"
              >
                {description}
              </p>
            </div>
            <div
              ref={line}
              // className="h-1 w-0 bg-accent-100 opacity-50 md:hidden"
              className="h-1 w-0 bg-[#1E1E1E] opacity-50 md:hidden"
            ></div>
          </div>

          <div
            ref={services}
            className="mt-6 md:mt-0 select-none leading-[2.3rem] text-secondary-500 md:leading-[2.5rem] lg:leading-[3.4rem] md:flex-1 md:translate-y-10 md:opacity-0"
          >
            {items.map((item, index) => {
              return (
                <p
                  key={index}
                  className="font-general text-special 2xl:text-7xl font-extrabold "
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
