// images import
/* eslint-disable react/prop-types */
import Banky from "../../assets/Images/Banking System Simulator.jpeg";
import OES from "../../assets/Images/Online Examination System.jpeg";
import AMS from "../../assets/Images/Attendance Management System.jpeg";

const ProjectsData = [
  {
    id: "1.",
    title: "Banking System Simulator.",
    description: `Banky is a Java application that simulates a basic banking system,
             offering a practical learning experience for core programming concepts.`,
    skillsName: [
      "C language",
      "C++ language",
      "Java Core language",
      "Java Advance",
      "Kotlin (familiar)",
      "MySQl",
    ],
    image: Banky,
    color: "#BBACAF",
    year: "2023",
    tools: "Java • data persistence • OOP's • Figma",
    link: "https://github.com/PiyushKaithwas",
  },

  {
    id: "2.",
    title: "Online Exam System.",
    description: ` A Java Project for Assessment Simulation, This project simulates a comprehensive online examination system built with Java. It provides a platform for creating 
                and taking timed exams, mimicking real-world testing scenarios.`,
    skillsName: [
      "SpringBoot Framework",
      "Java Advance",
      "Futter",
      "Api-Integration",
      "Serenity",
      "Junit",
    ],
    image: OES,
    color: "#977F6D",
    year: "2024",
    tools: "SpringBoot • TailwindCSS • JavaScript • Java Advance",
    link: "https://github.com/PiyushKaithwas",
  },

  {
    id: "3.",
    title: "Attendance System.",
    description: `A Java Application for Streamlined Record keeping, This Java application tackles the challenge of 
                attendance management by offering a user-friendly and efficient system. It streamlines the process 
                of recording and managing attendance data, replacing traditional methods like paper sheets or manual spreadsheets.`,
    skillsName: [
      "Visual - studio",
      "GitHub",
      "Git",
      "testing - units",
      "Linux",
      "Eclipse - Tools",
      "Leetcode",
    ],
    image: AMS,
    color: "#BBACAF",
    year: "2024",
    tools: "JSwing • TailwindCSS • JavaScript • Figma",
    link: "https://github.com/PiyushKaithwas",
  },
];

export default ProjectsData;
