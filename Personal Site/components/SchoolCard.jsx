import React from "react";

const SchoolCard = ({ name, degree, from, to }) => {
  return (
    <div className="bg-gray-900 p-5 rounded-lg shadow-lg hover:shadow-purple-500 text-center hover:cursor-pointer duration-300 transition-transform transform hover:scale-105 hover:border hover:border-purple-400">
      <h1 className="text-xl font-semibold ">{name}</h1>
      <h3 className="text-base mt-5 text-gray-400">{degree}</h3>
      <p className="text-sm mt-5 text-gray-400">
        From {from} To {to}
      </p>
    </div>
  );
};

export default SchoolCard;
