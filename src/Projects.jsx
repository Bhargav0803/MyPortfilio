import React from "react";
import { projectData } from "./projectData";
import { useDarkMode } from "./DarkModeContext";

export default function Projects() {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="text-black body-font bg-light dark:bg-dark">
        <div className="container px-24 pb-16 pt-2 mx-auto drop-shadow-lg">
          <h1 className="sm:text-3xl font-body text-left text-3xl font-bold title-font mb-10 drop-shadow-lg bg-primary text-transparent bg-clip-text">
            Projects
          </h1>
          <div className="flex flex-wrap -m-4">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="hover:shadow-2xl hover:cursor-pointer hover:font-semibold  p-4 md:w-1/3"
              >
                <div className="h-full border-4 p-2 border-primary drop-shadow-xl dark:hover:shadow-gray-400 dark:hover:shadow-lg rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-center"
                    src={project.image}
                    alt="blog"
                  />
                  <div className="p-4 text-left">
                    <h2 className="tracking-widest text-xs title-font font-semibold text-gray-400 mb-1">
                      {project.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium font-body text-primary mb-2">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed mb-3 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <a
                        href={project.link}
                        className="text-gray-400 hover:text-primary font-bold inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
