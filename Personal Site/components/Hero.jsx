import React from "react";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center"
      id="hero"
    >
      <h1 className="text-6xl font-bold text-white mb-5">
        Hi, I'm Pratik Patil
      </h1>
      <p className="text-2xl font-semibold text-gray-300">
        I'm a Full Stack Developer...
      </p>
      <a
        href="#project"
        className="cursor-pointer mt-15 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-800 transition-colors duration-400"
      >
        View My Work
      </a>
    </div>
  );
};

export default Hero;
