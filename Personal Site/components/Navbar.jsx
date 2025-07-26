import React, { useState } from "react";
import { Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skill", label: "Skills" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed w-full flex justify-end items-center gap-10 px-10 py-7 bg-transparent z-50">
      <ul className="hidden md:flex justify-end items-center gap-5">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={`#${link.id}`}
            className="cursor-pointer text-lg font-semibold text-gray-200 hover:cursor-pointer hover:text-[#7f6ce0] duration-500 transition-colors hover:underline underline-offset-4"
          >
            {link.label}
          </a>
        ))}
        <button className="p-2 rounded-full bg-gray-500 hover:bg-gray-200 transition-colors duration-300 hover:cursor-pointer">
          <Sun />
        </button>
      </ul>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center gap-2 z-50">
        <button
          className="p-2 rounded-full bg-gray-500 hover:bg-gray-200 hover:cursor-pointer"
          onClick={toggleNavbar}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile  */}
      {isOpen && (
        <div className="absolute top-20 right-6 bg-transperant bg-opacity-0 backdrop-blur-md p-6 rounded-lg flex flex-col gap-4 md:hidden z-40">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              className="text-lg font-semibold text-gray-200 hover:text-[#7f6ce0] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="p-2 rounded-full bg-gray-500 hover:bg-gray-200 transition-colors duration-300">
            <Sun />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
