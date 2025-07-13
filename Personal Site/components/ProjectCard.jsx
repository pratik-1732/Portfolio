import React from "react";
import { SquareArrowOutUpRight, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  skills,
  image,
  demoLink,
  codeLink,
}) => {
  return (
    <div class="group h-100 w-130 [perspective:1000px] hover:cursor-pointer ">
      <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-1500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div class="absolute inset-0">
          <img
            className="h-full w-full rounded-xl object-contain shadow-xl shadow-black/40 border-2 border-yellow-500 hover:shadow-sky-400 hover:shadow-lg transition-all duration-300"
            src={image}
            alt="web-img"
          />
        </div>
        <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-15 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] border-2 border-yellow-500">
          <div class="flex min-h-full flex-col justify-start py-5 ">
            <h1 class="text-3xl font-bold text-center">{title}</h1>
            <div className="text-base mt-4 flex flex-col gap-2">
              {description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <div className="mt-8">
              <ul className="grid grid-cols-4 gap-2">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center text-center px-2 py-2 text-xs text-black font-medium bg-blue-300 rounded-md hover:bg-blue-500 hover:scale-105 transition-all duration-300 whitespace-normal break-words"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center mt-5 py-2">
              <button className="mt-3 rounded-lg text-gray-400 py-1 px-2 text-sm hover:text-blue-600 transition-colors duration-300 hover:cursor-pointer">
                <SquareArrowOutUpRight className="h-8 w-8" />
              </button>
              <button className="mt-3 rounded-lg text-gray-400 py-1 px-2 text-sm hover:text-blue-600 transition-colors duration-300 hover:cursor-pointer">
                <Github className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
