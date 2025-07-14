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
      title: "Location Tracker",
      description: [
        "Built a real-time location tracking app using Node.js, Express, and Socket.io.",
        "Used Leaflet to display live user locations on an interactive map.",
        "Deployed the app on Render for real-time access and scalability.",
      ],
      skills: [
        "Node.js",
        "Express.js",
        "Socket.io",
        "Leaflet.js",
        "JavaScript",
        "EJS",
      ],
      image: "/images/web-img/location.png",
      demoLink: "https://location-tracker-y30h.onrender.com",
      codeLink: "https://github.com/pratik-1732/Location-Tracker",
    },
  ];
  return (
    <div className="flex flex-col mt-30 max-w-7xl mx-auto px-7 items-center">
      <h1 className="text-5xl font-bold hover:cursor-pointer underline decoration-yellow-500 decoration-2 underline-offset-6 text-white duration-300">
        Projects
      </h1>
      <div className="grid grid-cols-2 gap-10 mt-15">
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
      </div>
    </div>
  );
};

export default Project;
