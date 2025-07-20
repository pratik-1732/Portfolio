import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const projectSet = [
    {
      title: "Maze Visualizer",
      description: [
        "Developed a maze visualizer using DFS, Prim’s, and Kruskal’s algorithms.",
        "Added smooth animations with anime.js for better visualization.",
        "Included options to change grid size and choose algorithms.",
      ],
      skills: [
        "JavaScript",
        "HTML",
        "CSS",
        "anime.js",
        "Data Structures & Algorithms",
      ],
      image: "/images/web-img/maze.png",
      demoLink: "https://maze-generation-visualiser.vercel.app/",
      codeLink: "https://github.com/pratik-1732/Maze-Generation-Visualiser",
    },
    {
      title: "ClimaAlert – Smart Weather App",
      description: [
        "Developed a full stack weather application using React.js and Node.js to display real-time and 7-day forecasts.",
        "Enabled city-based weather search with accurate API-based results from OpenWeather.",
        "Integrated WhatsApp subscription using Meta API to send automated daily updates at 7 AM.",
      ],
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "OpenWeather API",
        "Meta API",
        "JavaScript",
        "Full Stack Development",
      ],
      image: "/images/web-img/climaalert.png",
      demoLink: "",
      codeLink: "https://github.com/pratik-1732/ClimaAlert",
    },
    {
      title: "LC Buddy – AI-Powered Coding Helper",
      description: [
        "Built a Chrome extension that extracts LeetCode problem descriptions and provides AI-generated solving steps and code suggestions.",
        "Used Gemini API to generate contextual problem-solving approaches and language-specific code with <5s latency.",
        "Designed an embedded UI on the LeetCode page with <100ms load time for seamless, distraction-free usage.",
      ],
      skills: ["JavaScript", "Tailwind CSS", "DOM Manipulation", "Gemini API"],
      image: "/images/web-img/extention.png",
      demoLink: "",
      codeLink: "https://github.com/pratik-1732/leetcode-helper",
    },
  ];
  return (
    <div
      className="flex flex-col pt-30 max-w-7xl mx-auto px-7 items-center min-h-screen"
      id="project"
    >
      <h1 className="text-5xl mb-5 font-bold hover:cursor-pointer underline decoration-yellow-500 decoration-2 underline-offset-6 text-white duration-300">
        Projects
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-20">
        Explore my latest work showcasing innovative solutions, cutting-edge
        technologies, and creative problem-solving approaches.
      </p>
      {/* <div className="grid grid-cols-2 gap-10">
        {projectSet.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            skills={project.skills}
            image={project.image}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </div> */}
      <div className="space-y-0">
        {projectSet.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Project;
