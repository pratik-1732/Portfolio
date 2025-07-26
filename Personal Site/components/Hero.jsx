import React, { useEffect, useState } from "react";

const Hero = () => {
  const texts = ["Pratik Patil", "Full Stack Developer", "Web Developer"];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout;

    if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, texts]);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-center p-5 md:p-15 lg:p-0"
      id="hero"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">
        Hi, I'm{" "}
        <span className="text-cyan-400">
          {displayedText}
          <span className="animate-pulse">|</span>
        </span>
      </h1>
      <p className="text-lg md:text-xl md:max-w-4xl font-semibold text-gray-300">
        I'm a full stack developer and recent graduate from IIT(ISM) Dhanbad,
        passionate about building clean, efficient, and user-friendly web
        applications. I love solving problems, learning new technologies, and
        turning ideas into real-world solutions.
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
