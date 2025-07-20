import React from "react";
import { SquareArrowOutUpRight, Github, Star, ArrowRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="group mb-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-110"></div>

      <div
        className={`relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/10 transition-all duration-700 hover:border-cyan-500/50 ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } flex flex-col lg:flex`}
      >
        {/* Image */}
        <div className="lg:w-1/2 relative group/image">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 lg:h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover/image:bg-black/10 transition-all duration-500"></div>

          {/* Floating tech badges on image */}
          <div className="absolute top-4 left-4">
            <div className="flex flex-wrap gap-2">
              {project.skills.slice(0, 3).map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-black/60 backdrop-blur-sm text-cyan-300 px-3 py-1 rounded-full text-xs font-medium border border-cyan-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl lg:text-4xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-500">
                {project.title}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              {project.description.map((desc, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item">
                  <ArrowRight className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300" />
                  <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills  */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-cyan-600 hover:to-blue-600 text-gray-200 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-600 hover:border-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4 pt-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <SquareArrowOutUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-gray-500"
              >
                <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
