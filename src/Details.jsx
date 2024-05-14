import React from "react";
import { useDarkMode } from "./DarkModeContext";
export default function () {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-dark bg-light pb-10">
        <section className="text-left  bg-gray-100 dark:shadow-gray-400 shadow-2xl drop-shadow-2xl mx-24 p-2 rounded-3xl py-6 bg-light dark:bg-dark dark:text-gray-400">
          <h2 className="text-3xl font-body font-semibold bg-primary drop-shadow-xl  text-transparent bg-clip-text p-3 mb-1">
            About
          </h2>
          <p className="text-ms font-medium leading-7  p-3 mb-2">
            As an undergraduate in computer engineering with a keen interest in
            blockchain technology, I've honed my skills in frontend development,
            specializing in{" "}
            <span className="text-primary font-semibold">
              React, Javascript
            </span>{" "}
            and <span className="text-primary font-semibold">TailwindCSS</span>{" "}
            while also delving into backend development with{" "}
            <span className="text-primary font-semibold">
              Node.js & Express.js
            </span>
            . I have experience in Flutter development as well. Beyond coding,
            I'm fascinated by the intersection of technology, sports, and
            society, and enjoy playing lawn tennis, particularly admiring Novak
            Djokovic. In my downtime, I indulge in reading, listening soulful
            music, and exploring podcasts. My diverse interests and dedication
            to learning drive me to make meaningful contributions in the tech
            industry.{" "}
          </p>
        </section>
      </div>
    </div>
  );
}
