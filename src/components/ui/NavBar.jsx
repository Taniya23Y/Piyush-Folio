import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="max-w-screen-full mx-auto fixed top-0 z-[999] w-full flex items-center justify-center bg-[#1E1E1E] px-5 py-2 ">
      <nav className="flex items-center justify-between w-full p-1 border-b-[1px] border-[#0DA34E]">
        <div className="Nav-Logo text-2xl text-[#0DA34E] z-50 flex items-center font-[IrishGrover] font-bold">
          Piyush Kaithwas
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`Nav-Links text-white flex-col md:flex md:flex-row md:items-center  justify-between lg:gap-7 gap-5  text-[1rem] text-opacity-60 ${
            isOpen ? "hidden" : "hidden"
          }`}
        >
          <a href="#home" className="group relative block md:inline-block">
            <span>Home</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-[#0DA34E] duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a href="#about" className="group relative block md:inline-block">
            <span>About</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-[#0DA34E] duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a href="#skills" className="group relative block md:inline-block">
            <span>Skills</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-[#0DA34E] duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a href="#projects" className="group relative block md:inline-block">
            <span>Projects</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-[#0DA34E] duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href="#experience"
            className="group relative block md:inline-block"
          >
            <span>Experience</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-[#0DA34E] duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </div>
        <div>
          <a
            className="button group relative hover:bg-transparent block md:inline-block"
            href="#contact"
          >
            <span className="relative w-fit">
              <span className="absolute bottom-2 h-[0.15em] w-0 bg-white opacity-90 duration-300 ease-out group-hover:w-full"></span>
              <button className="bg-[#0DA34E] capitalize text-xl px-2 py-[5px] rounded-full font-bold text-white">
                LET&apos;s TALK.
              </button>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
