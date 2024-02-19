import React, { useState } from "react";

// react icons
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const MobileNav = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <nav className="sticky top-0 left-0 w-full flex items-center justify-between bg-white px-4 py-4 md:hidden shadow-md  shadow-[#e7e7e7]">
        <h2 className=" tracking-wider font-[500] text-[1rem] text-[#343a40]">
          NineStar
        </h2>

        <FiMenu
          className="text-[1.5rem] text-textColor cursor-pointer"
          onClick={() => setIsMenu(!isMenu)}
        />
      </nav>
      {isMenu && (
        <div
          className={` ${
            isMenu && "!right-0"
          } bg-white text-[1.2rem] fixed top-0 right-[-500px] transition-all duration-1000 min-h-screen w-[70%] p-4`}
        >
          <RxCross2
            className="text-[1.2rem] text-textColor float-right"
            onClick={() => setIsMenu(false)}
          />
          <ul className="flex flex-col list-none px-4 items-center gap-8 mt-12 text-[1rem]">
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
            <button className="py-2 px-4 outline-none text-brandColor rounded text-[1rem] bg-white transition-all duration-300 border border-brandColor cursor-pointer hover:bg-brandColor hover:text-white">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileNav;
