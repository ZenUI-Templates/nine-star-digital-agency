import React, { useState } from "react";

// react icons
import { GoPlus } from "react-icons/go";
import { BsLink } from "react-icons/bs";

const Portfolio = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="portfolio" className="max-w-[1400px] mx-auto  py-12 px-6">
      <h1 className="text-center text-[1rem] md:text-[2rem] text-[#ccc]">
        Portfolio
      </h1>

      <div className="text-center">
        <h2 className="text-[1.4rem] md:text-[2.5rem] text-textColor mt-4">
          Check out our beautifull portfolio
        </h2>
        <div className="w-[80px] bg-brandColor h-[4px] mx-auto mt-2"></div>
      </div>

      <div className="flex items-center justify-center gap-5 w-full text-center mt-12 mb-5">
        <p
          className={`${
            active == 0
              ? "text-brandColor font-bold"
              : "text-textColor text-normal"
          } cursor-pointer`}
          onClick={() => setActive(0)}
        >
          All
        </p>
        <p
          className={`${
            active == 1
              ? "text-brandColor font-bold"
              : "text-textColor text-normal"
          } cursor-pointer`}
          onClick={() => setActive(1)}
        >
          App
        </p>
        <p
          className={`${
            active == 2
              ? "text-brandColor font-bold"
              : "text-textColor text-normal"
          } cursor-pointer`}
          onClick={() => setActive(2)}
        >
          Card
        </p>
        <p
          className={`${
            active == 3
              ? "text-brandColor font-bold"
              : "text-textColor text-normal"
          } cursor-pointer`}
          onClick={() => setActive(3)}
        >
          Web
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
        <div className="relative group overflow-hidden">
          <img
            src="/portfolio/portfolio-1.jpg"
            alt=""
            className="w-full object-cover"
          />
          <div className="bg-[#e6e6e6] w-full h-full absolute top-0 right-[-500px] flex items-center justify-center flex-col gap-8 group-hover:right-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <GoPlus className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
              <BsLink className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
            </div>

            <div className=" text-center">
              <h3 className="text-[1.5rem] text-textColor mb-2">App 2</h3>
              <h4 className="text-[1.1rem] text-textColor mb-2">Web 3</h4>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="/portfolio/portfolio-2.jpg"
            alt=""
            className="w-full object-cover"
          />
          <div className="bg-[#e6e6e6] w-full h-full absolute top-0 right-[-500px] flex items-center justify-center flex-col gap-8 group-hover:right-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <GoPlus className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
              <BsLink className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
            </div>

            <div className=" text-center">
              <h3 className="text-[1.5rem] text-textColor mb-2">App 2</h3>
              <h4 className="text-[1.1rem] text-textColor mb-2">Web 3</h4>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="/portfolio/portfolio-3.jpg"
            alt=""
            className="w-full object-cover"
          />
          <div className="bg-[#e6e6e6] w-full h-full absolute top-0 right-[-500px] flex items-center justify-center flex-col gap-8 group-hover:right-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <GoPlus className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
              <BsLink className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
            </div>

            <div className=" text-center">
              <h3 className="text-[1.5rem] text-textColor mb-2">App 2</h3>
              <h4 className="text-[1.1rem] text-textColor mb-2">Web 3</h4>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="/portfolio/portfolio-4.jpg"
            alt=""
            className="w-full object-cover"
          />
          <div className="bg-[#e6e6e6] w-full h-full absolute top-0 right-[-500px] flex items-center justify-center flex-col gap-8 group-hover:right-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <GoPlus className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
              <BsLink className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
            </div>

            <div className=" text-center">
              <h3 className="text-[1.5rem] text-textColor mb-2">App 2</h3>
              <h4 className="text-[1.1rem] text-textColor mb-2">Web 3</h4>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="/portfolio/portfolio-5.jpg"
            alt=""
            className="w-full object-cover"
          />
          <div className="bg-[#e6e6e6] w-full h-full absolute top-0 right-[-500px] flex items-center justify-center flex-col gap-8 group-hover:right-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <GoPlus className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
              <BsLink className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
            </div>

            <div className=" text-center">
              <h3 className="text-[1.5rem] text-textColor mb-2">App 2</h3>
              <h4 className="text-[1.1rem] text-textColor mb-2">Web 3</h4>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="/portfolio/portfolio-6.jpg"
            alt=""
            className="w-full object-cover"
          />
          <div className="bg-[#e6e6e6] w-full h-full absolute top-0 right-[-500px] flex items-center justify-center flex-col gap-8 group-hover:right-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <GoPlus className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
              <BsLink className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
            </div>

            <div className=" text-center">
              <h3 className="text-[1.5rem] text-textColor mb-2">App 2</h3>
              <h4 className="text-[1.1rem] text-textColor mb-2">Web 3</h4>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="/portfolio/portfolio-7.jpg"
            alt=""
            className="w-full object-cover"
          />
          <div className="bg-[#e6e6e6] w-full h-full absolute top-0 right-[-500px] flex items-center justify-center flex-col gap-8 group-hover:right-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <GoPlus className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
              <BsLink className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
            </div>

            <div className=" text-center">
              <h3 className="text-[1.5rem] text-textColor mb-2">App 2</h3>
              <h4 className="text-[1.1rem] text-textColor mb-2">Web 3</h4>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="/portfolio/portfolio-8.jpg"
            alt=""
            className="w-full object-cover"
          />
          <div className="bg-[#e6e6e6] w-full h-full absolute top-0 right-[-500px] flex items-center justify-center flex-col gap-8 group-hover:right-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <GoPlus className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
              <BsLink className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
            </div>

            <div className=" text-center">
              <h3 className="text-[1.5rem] text-textColor mb-2">App 2</h3>
              <h4 className="text-[1.1rem] text-textColor mb-2">Web 3</h4>
            </div>
          </div>
        </div>

        <div className="relative group overflow-hidden">
          <img
            src="/portfolio/portfolio-9.jpg"
            alt=""
            className="w-full object-cover"
          />
          <div className="bg-[#e6e6e6] w-full h-full absolute top-0 right-[-500px] flex items-center justify-center flex-col gap-8 group-hover:right-0 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <GoPlus className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
              <BsLink className="bg-white p-1 rounded-full w-[30px] h-[30px] text-brandColor text-[3rem]" />
            </div>

            <div className=" text-center">
              <h3 className="text-[1.5rem] text-textColor mb-2">App 2</h3>
              <h4 className="text-[1.1rem] text-textColor mb-2">Web 3</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
