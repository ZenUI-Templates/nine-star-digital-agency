import React from "react";

const Hero = () => {
  return (
    <header
      id="Home"
      className="py-6 md:py-24 px-4 md:px-6 max-w-[1400px] mx-auto  bg-[#fef8f5] flex justify-between md:flex-row flex-col md:gap-0 gap-16"
    >
      <article className="w-full md:w-[40%]">
        <h1 className="text-[2rem] md:text-[3rem] text-textColor">
          Bettter digital experience with Ninestars
        </h1>
        <p className="text-[1rem] mt-3 mb-9 text-textColor">
          React-Tailwind UI is a free platform where you get all the components
          and designs you need to use.
        </p>

        <button className="py-2 px-6 bg-brandColor outline-none rounded text-white text-[1rem] hover:bg-transparent transition-all duration-300 border hover:text-brandColor border-brandColor cursor-pointer">
          Get Started
        </button>
      </article>

      <article>
        <img
          src="/hero-img.svg"
          alt="hero_image"
          className="md:w-[550px] w-full"
        />
      </article>
    </header>
  );
};

export default Hero;
