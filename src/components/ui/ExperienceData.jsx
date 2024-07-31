import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

const ExperiencesData = [
  {
    title: "Graduation bootcamp",
    location: "SVCE, Indore",
    description:
      "I am a third year under graduate Student 👩‍🎓 in computer science & Engineering. I am learning a lot in my college journey.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "Frontend Web Developer",
    location: "Indore, India",
    description:
      "I worked as a frontend web developer at Oasis Infobyte for 1 month(Remote) 👩‍💻.",
    icon: React.createElement(CgWorkAlt),
    date: "2023- 1 month WFH",
  },
  {
    title: "Mern-Stack Developer(Learner)",
    location: "Indore, India",
    description:
      "I'm now a full-stack developer 🚀 with a focus on JavaScript and React.js. Although my experience started with a one-month remote Frontend Developer role at Oasis Infobyte, I'm dedicated to mastering (DSA) & MERN stack. My stack includes React.js, Next.js(Familiar), TypeScript(Familiar), Tailwind CSS, and Prisma. I'm actively seeking full-time opportunities to apply my skills and contribute to impactful projects. 💻",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
];

export default ExperiencesData;
