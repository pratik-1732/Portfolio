import React from "react";
import { Mail, Phone, MapPinHouse } from "lucide-react";
import SchoolCard from "./SchoolCard";
const About = () => {
  const study = [
    {
      name: "Indian Institute Of Technology, Dhanbad",
      degree: "Bachelor of Technology",
      from: "2021",
      to: "2025",
    },
    {
      name: "Sarvodaya Sr. Sec. School, Kota",
      degree: "Higher Secondary Certificate",
      from: "2019",
      to: "2020",
    },
    {
      name: "Jawahar Navodaya Vidyalaya, Kolhapur",
      degree: "Secondary School Certificate",
      from: "2017",
      to: "2018",
    },
  ];

  return (
    <div className="text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold underline decoration-yellow-500 decoration-2 underline-offset-6">
        About <span className="text-purple-600">Me</span>
      </h1>
      <p className="mt-10 text-lg max-w-4xl">
        I'm passionate about creating elegant solutions to complex problems, and
        I'm constantly learning new technologies and techniques to stay at the
        forefront of the ever-evolving web landscape.
      </p>
      <ul className="mt-10 text-lg grid grid-cols-3 text-gray-400">
        <li className="flex gap-3 items-center">
          <span className="text-purple-500 font-semibold">
            <Mail />
          </span>
          dev.pratik35@gmail.com
        </li>
        <li className="flex gap-3 items-center">
          <span className="text-purple-500 font-semibold">
            <Phone />
          </span>{" "}
          +918875243247
        </li>
        <li className="flex gap-3 items-center">
          <span className="text-purple-500 font-semibold">
            <MapPinHouse />
          </span>{" "}
          Kolhapur, Maharashtra, 416205
        </li>
      </ul>
      <div className="mt-15 w-full max-w-6xl text-center">
        <h2 className="text-3xl font-semibold">Education</h2>
        <div className="mt-10 grid grid-cols-3 gap-10">
          {study.map((item, index) => (
            <SchoolCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
