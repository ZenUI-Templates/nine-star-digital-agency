import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full mx-auto  md:flex items-center justify-between max-w-[1400px] mx-autox bg-white px-6 py-5 shadow-md  shadow-[#e7e7e7] hidden">
      <h2 className=" tracking-wider font-[500] text-[2rem] text-[#343a40]">
        NineStar
      </h2>
      <ul className="flex items-center gap-8 list-none text-[1.2rem]">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About">About Us</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
        <button className="py-2 px-6 outline-none text-brandColor rounded text-[1rem] bg-white transition-all duration-300 border border-brandColor cursor-pointer hover:bg-brandColor hover:text-white">
          Get Started
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
