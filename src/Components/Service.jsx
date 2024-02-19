import React from "react";

// react icons
import { TfiWorld } from "react-icons/tfi";
import { TbBrandSpeedtest } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { FaRegFileAlt } from "react-icons/fa";

const Service = () => {
  return (
    <section
      id="service"
      className="bg-[#fef8f5] max-w-[1400px] mx-auto  py-8 px-6"
    >
      <h1 className="text-center tet-[1rem] md:text-[2rem] text-[#ccc]">
        Service
      </h1>

      <div className="text-center">
        <h2 className="text-[1.4rem] md:text-[2.5rem] text-textColor mt-4">
          Check out the great services we offer
        </h2>
        <div className="w-[80px] bg-brandColor h-[4px] mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 mt-12 gap-5 text-textColor">
        <div className="bg-white rounded-2xl p-6 text-center shadow-md cursor-pointer serviceCard">
          <TfiWorld className="text-[2.5rem] text-brandColor" />
          <h2 className="my-3 text-[1.2rem] ">Lorem Ipsum</h2>
          <p className=" text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            similique, perspiciatis aliquid porro libero dolorem eaque hic
            perferendis blanditiis ullam.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 text-center shadow-md cursor-pointer serviceCard">
          <FaRegFileAlt className="text-[2.5rem] text-brandColor" />
          <h2 className="my-3 text-[1.2rem] ">Sed ut perspiciatis</h2>
          <p className=" text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            similique, perspiciatis aliquid porro libero dolorem eaque hic
            perferendis blanditiis ullam.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 text-center shadow-md cursor-pointer serviceCard">
          <TbBrandSpeedtest className="text-[2.5rem] text-brandColor" />
          <h2 className="my-3 text-[1.2rem] ">Magni Dolores</h2>
          <p className=" text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            similique, perspiciatis aliquid porro libero dolorem eaque hic
            perferendis blanditiis ullam.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 text-center shadow-md cursor-pointer serviceCard">
          <BiWorld className="text-[2.5rem] text-brandColor" />
          <h2 className="my-3 text-[1.2rem] ">Nemo Enim</h2>
          <p className=" text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            similique, perspiciatis aliquid porro libero dolorem eaque hic
            perferendis blanditiis ullam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
