import React from "react";
import SkillCard from "./SkillCard";

const Skill = () => {
  const skillSet = [
    {
      title: "JavaScript",
      image: "/images/icons/js.png",
    },
    {
      title: "React",
      image: "/images/icons/react.png",
    },
    {
      title: "Node.js",
      image: "/images/icons/nodejs.png",
    },
    {
      title: "CSS",
      image: "/images/icons/css.png",
    },
    {
      title: "HTML",
      image: "/images/icons/html.png",
    },
    {
      title: "Git",
      image: "/images/icons/git.png",
    },
    {
      title: "GitHub",
      image: "/images/icons/github.png",
    },
    {
      title: "C++",
      image: "/images/icons/c++.png",
    },
    {
      title: "PostgreSQL",
      image: "/images/icons/postgre.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-5xl font-bold hover:cursor-pointer underline decoration-yellow-500 decoration-2 underline-offset-6 text-white duration-300">
        Skills
      </h1>
      <div className="grid grid-cols-5 gap-8 px-20 mt-10">
        {skillSet.map((skill, index) => (
          <SkillCard key={index} title={skill.title} image={skill.image} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
