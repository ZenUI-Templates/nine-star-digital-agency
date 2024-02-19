import React from "react";

// react icons
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaCircleNodes } from "react-icons/fa6";

const About = () => {
  return (
    <main
      id="About"
      className="max-w-[1400px] mx-auto py-16 md:py-24 px-6 bg-[##fff] flex justify-between text-textColor md:flex-row flex-col md:gap-0 gap-8"
    >
      <article>
        <img
          src="/about-img.svg"
          alt="hero_image"
          className="md:w-[500px] w-full"
        />
      </article>

      <article className="w-full md:w-[50%]">
        <h1 className="text-[2rem] md:text-[3rem] text-textColor">
          Voluptatem dignissimos provident quasi
        </h1>
        <p className="text-[1rem] mt-3 mb-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure dolor in reprehenderit
        </p>

        <div className="flex gap-8">
          <div>
            <HiOutlineOfficeBuilding className="text-[2.5rem] text-brandColor" />
            <h3 className="text-[1.2rem] md:text-[1.5rem] mt-4 mb-2">
              Corporis voluptates sit
            </h3>
            <p className="text-[0.9rem] md:text-[1rem]">
              Consequuntur sunt aut quasi enim aliquam quae harum pariatur
              laboris nisi ut aliquip
            </p>
          </div>

          <div>
            <FaCircleNodes className="text-[2.2rem] text-brandColor" />
            <h3 className="text-[1.2rem] md:text-[1.5rem] mt-4 mb-2">
              Ullamco laboris nisi
            </h3>
            <p className="text-[0.9rem] md:text-[1rem]">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default About;
