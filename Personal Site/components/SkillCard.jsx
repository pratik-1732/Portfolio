import React from "react";

const SkillCard = ({ title, image }) => {
  return (
    <div className="flex flex-col items-center px-5 py-7 bg-gray-800 rounded-lg shadow-lg border border-yellow-300 hover:cursor-pointer hover:border-blue-700 hover:shadow-sky-700 hover:scale-110 duration-300 transition-transform">
      <img src={image} className="h-20 w-20" />
      <h3 className="text-xl text-white font-semibold tracking-wide mt-5">
        {title}
      </h3>
    </div>
  );
};

export default SkillCard;
