import React from "react";
import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-end items-center gap-10 px-10 py-7 bg-transparent">
      <ul className="flex justify-end items-center gap-5">
        <li className="cursor-pointer text-lg font-semibold text-gray-300 hover:cursor-pointer hover:text-[#7f6ce0] duration-500 transition-colors hover:underline underline-offset-4">
          Home
        </li>
        <li className="cursor-pointer text-lg font-semibold text-gray-300 hover:cursor-pointer hover:text-[#7f6ce0] duration-500 transition-colors hover:underline underline-offset-4">
          About
        </li>
        <li className="cursor-pointer text-lg font-semibold text-gray-300 hover:cursor-pointer hover:text-[#7f6ce0] duration-500 transition-colors hover:underline underline-offset-4">
          Skills
        </li>
        <li className="cursor-pointer text-lg font-semibold text-gray-300 hover:cursor-pointer hover:text-[#7f6ce0] duration-500 transition-colors hover:underline underline-offset-4">
          Projects
        </li>
        <li className="cursor-pointer text-lg font-semibold text-gray-300 hover:cursor-pointer hover:text-[#7f6ce0] duration-500 transition-colors hover:underline underline-offset-4">
          Contact
        </li>
      </ul>
      <button className="p-2 rounded-full bg-gray-500 hover:bg-gray-200 transition-colors duration-300 hover:cursor-pointer">
        <Sun />
      </button>
    </div>
  );
};

export default Navbar;
