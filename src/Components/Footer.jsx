import React from "react";

// react icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn, FaSkype } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer
        id="Footer"
        className="w-full max-w-[1400px] mx-auto  py-12 px-6  text-textColor"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5 gap-12">
          <div>
            <h2 className=" tracking-wider font-[500] text-[2rem] text-[#343a40]">
              NineStar
            </h2>
            <p className="mt-3">
              A108 Adam Street New York, NY 535022 United States
            </p>
            <p className="mt-4">
              <b>Phone:</b> +1 5589 55488 55
            </p>
            <p className="mt-2">
              <b>mail:</b> info@example.com
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-[1.2rem]  font-[700]">Useful Links</h2>
            <p className="mt-3 cursor-pointer hover:text-brandColor transition-all duration-300">
              Home
            </p>
            <p className="cursor-pointer hover:text-brandColor transition-all duration-300">
              About us
            </p>
            <p className="cursor-pointer hover:text-brandColor transition-all duration-300">
              Services
            </p>
            <p className="cursor-pointer hover:text-brandColor transition-all duration-300">
              Terms of service
            </p>
            <p className="cursor-pointer hover:text-brandColor transition-all duration-300">
              Privacy policy
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-[1.2rem]  font-[700]">Our Services</h2>
            <p className="mt-3 cursor-pointer hover:text-brandColor transition-all duration-300">
              Web Design
            </p>
            <p className="cursor-pointer hover:text-brandColor transition-all duration-300">
              Web Development
            </p>
            <p className="cursor-pointer hover:text-brandColor transition-all duration-300">
              Product Management
            </p>
            <p className="cursor-pointer hover:text-brandColor transition-all duration-300">
              Marketing
            </p>
            <p className="cursor-pointer hover:text-brandColor transition-all duration-300">
              Graphic Design
            </p>
          </div>

          <div>
            <h2>Our Social Networks</h2>
            <p className="mt-3">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="flex items-center gap-4 mt-6">
              <FaFacebookF className="p-2 text-[2rem] bg-brandColor text-white rounded-full" />
              <FaInstagram className="p-2 text-[2rem] bg-brandColor text-white rounded-full" />
              <FaLinkedinIn className="p-2 text-[2rem] bg-brandColor text-white rounded-full" />
              <FaSkype className="p-2 text-[2rem] bg-brandColor text-white rounded-full" />
              <FaXTwitter className="p-2 text-[2rem] bg-brandColor text-white rounded-full" />
            </div>
          </div>
        </div>
        <div className="bg-[#CCC] w-full h-[2px] my-8"></div>
        <p className="text-[0.9rem]">
          © Copyright <b>React-Tailwind UI</b>. All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
