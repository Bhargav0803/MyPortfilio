import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import pic from "../src/images/profile.jpg";
import logo from "./images/logo.png";
import { useDarkMode } from "./DarkModeContext";
import Switch from "react-switch";

export default function Home({ detailsRef, contactRef }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-light px-24 dark:bg-dark">
        <section className="min-h-screen ">
          <nav className="py-5 mb-5 flex  justify-between">
            {/* <h1 className='text-2xl'>developedbyme</h1> */}
            <img className="h-12 w-12 cursor-pointer" src={logo} alt="" />
            <ul className="flex items-center">
              <Switch
                onChange={toggleDarkMode}
                checked={darkMode}
                uncheckedIcon={null}
                checkedIcon={false}
                onColor="#276880"
              ></Switch>
              <li>
                <a
                  className="bg-primary font-body font-thin text-sm text-white drop-shadow-lg ml-8 p-3 rounded-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/14WA9J2Rf-X30-oem0I63WCd_YP5fkAr2/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-gray-600 body-font py-10 rounded-3xl bg-gray-100 dark:shadow-gray-400 shadow-2xl drop-shadow-2xl  dark:bg-dark  ">
            <div className="container mx-auto flex px-40 py-2 items-center justify-center ">
              <img
                className=" w-80 h-80"
                style={{ borderRadius: "50%" }}
                src={pic}
              ></img>
              <div className="text-center lg:w-2/3 w-full flex flex-col">
                <h3 className="text-2xl py-2 font-body font-medium text-gray-400 dark:text-gray-400  ">
                  Hello, I'm
                </h3>
                <h2 className=" text-6xl font-body font-bold bg-primary text-transparent bg-clip-text py-2">
                  Bhargav
                  <br />
                  <span>Mungekar</span>{" "}
                </h2>
                <h3 className="text-2xl font-body text-gray-400 dark:text-gray-400 font-medium py-3">
                  React Frontend Developer
                </h3>
                <div className="text-4xl flex justify-center gap-20 py-2 mb-5 text-gray-400 hover:cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/bhargav-mungekar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin />{" "}
                  </a>
                  <a
                    href="https://twitter.com/BhargavM_08"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillTwitterCircle />{" "}
                  </a>

                  <a
                    href="https://github.com/Bhargav0803"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
