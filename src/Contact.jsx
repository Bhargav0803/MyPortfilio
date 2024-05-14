import React from "react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useDarkMode } from "./DarkModeContext";

export default function Contact() {
  const { darkMode } = useDarkMode();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w8retpa", "template_hheog2f", form.current, {
        publicKey: "OzfIDQcysmFmRsPMW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message has been sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Somethinfg went wrong");
        }
      );
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="text-black body-font relative bg-light px-10 dark:bg-dark dark:text-gray-400">
        <div className=" container px-5 py-10 mx-auto">
          <div className="shadow-2xl rounded-3xl bg-gray-100 dark:shadow-gray-400  mx-20 p-2 6 bg-light dark:bg-dark py-4">
            <h1 className="sm:text-3xl font-body text-4xl text-center font-bold title-font my-4 drop-shadow-lg bg-primary text-transparent bg-clip-text">
              Contact Me
            </h1>
            <div className=" flex flex-col text-center w-full mb-12">
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Wish to collaborate with me or have any query then drop your
                message and your details here. Also you can connect with me on
                my social media handles mentioned above. Happy coding!
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 font-normal font-body  text-primary"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full  dark:bg-gray-400 bg-opacity-75 rounded-2xl border-2 border-primary  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 font-normal font-body  text-primary"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full dark:bg-gray-400 dark:text-black bg-opacity-75 rounded-2xl border-2 border-primary  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 font-normal font-body  text-primary"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full dark:bg-gray-400 dark:text-black bg-opacity-75 rounded-2xl border-2 border-primary  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button className="flex mx-auto text-white font-body bg-primary border-0 py-2 mb-4 px-8 focus:outline-none hover:bg-gray-400 rounded-2xl text-md ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
