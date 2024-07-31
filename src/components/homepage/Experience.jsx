/* eslint-disable react/prop-types */
// import ExperiencesData from "../ui/ExperienceData";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import LIIcon from "../helper/LIIcon"; // Ensure the correct import name
import Heading from "../ui/Heading";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LIIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize text-secondary-600 font-bold text-2xl">
          {position}&nbsp;
          <a className="text-[#D6D47D] capitalize" href={companyLink}>
            @{company}
          </a>
        </h3>
        <span className="capitalize text-[#D1D1C7] font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className=" text-gray-300 font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = ({ forwardedRef }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section
      ref={forwardedRef}
      id="experience"
      className="select-none"
      aria-label="experience"
    >
      <div className="" aria-label="experience">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
          <Heading title="experience" />
        </h2>

        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-[#B6BAAB] origin-top"
          />
          <ul className="w-full flex flex-col items-center justify-between ml-4">
            <Details
              position="Java Developer"
              company="CodeSoft"
              time="2024-present"
              address="Indore, India"
              work="Worked as a Java developer at Codesoft during a task-based internship, where I was responsible for developing new features and improving the performance of the company's task based solutions."
            />

            <Details
              position="Java Intern"
              company="CipherByte"
              time="2024-present"
              address="Indore, India"
              work="Worked as a Java intern at CipherByte during a task-based internship."
            />

            <Details
              position="Java Intern"
              company="Bharat Intern"
              time="2024-present"
              address="Indore, India"
              work="Worked as a Java intern at Bharat Intern during a task-based internship."
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
