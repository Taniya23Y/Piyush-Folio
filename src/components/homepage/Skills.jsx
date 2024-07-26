/* eslint-disable react/prop-types */

import SkillUi from "../ui/SkillUi";
import Heading from "../ui/Heading";

export default function Skills({ forwardedRef }) {
  const programmingItems = [
    "C language",
    "C++ language",
    "Java Core language",
    "Java Advance",
    "Kotlin (familiar)",
    "MySQl",
  ];

  const developmentItems = [
    "SpringBoot Framework",
    "Java Advance",
    "Futter",
    "Api-Integration",
    "Serenity",
    "Junit",
  ];

  const toolItems = [
    "Visual - studio",
    "GitHub",
    "Git",
    "testing - units",
    "Linux",
    "Eclipse - Tools",
    "Leetcode",
  ];

  return (
    <section
      id="skills"
      ref={forwardedRef}
      className="my-[10%] mx-auto max-w-screen-xl"
      aria-label="services"
    >
      <Heading title="my skills" />
      <div className=" flex justify-center items-center flex-col">
        <SkillUi
          title="my programming language."
          description="I focus on all things design and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={programmingItems}
        />
        <SkillUi
          title="my development frameworks."
          description="I focus on all things design and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={developmentItems}
        />
        <SkillUi
          title="my development toolboxes."
          description="I focus on all things design and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={toolItems}
        />
      </div>
    </section>
  );
}
