import React from "react";

// react icons
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="Contact" className="max-w-[1400px] mx-auto  py-12 px-6">
      <h1 className="text-center text-[1rem] md:text-[2rem] text-[#ccc]">
        Contact
      </h1>

      <div className="text-center">
        <h2 className="text-[1.4rem] md:text-[2.5rem] text-textColor mt-4">
          Contact us the get started
        </h2>
        <div className="w-[80px] bg-brandColor h-[4px] mx-auto mt-2"></div>
      </div>

      <div className="w-full flex md:flex-row flex-col items-center gap-10 mt-9 text-textColor">
        <div className="w-full md:w-[40%] px-4 shadow-lg flex flex-col gap-6 contact py-6">
          <div className="flex items-center gap-3">
            <IoLocationOutline className=" text-[2.5rem] md:text-[3rem] p-2 rounded-full text-brandColor bg-[#fdf1ec]" />
            <div>
              <h2 className="text-[1rem] md:text-[1.2rem]">Location:</h2>
              <p className="mt-2 text-[0.8rem] md:text-[0.9rem]">
                A108 Adam Street, New York, NY 535022
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MdOutlineEmail className="text-[2.5rem] md:text-[3rem] p-2 rounded-full text-brandColor bg-[#fdf1ec]" />
            <div>
              <h2 className="text-[1rem] md:text-[1.2rem]">Email:</h2>
              <p className="mt-2 text-[0.8rem] md:text-[0.9rem]">
                info@example.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <IoPhonePortraitOutline className=" text-[2.5rem] md:text-[3rem] p-2 rounded-full text-brandColor bg-[#fdf1ec]" />
            <div>
              <h2 className="text-[1rem] md:text-[1.2rem]">Call:</h2>
              <p className="mt-2 text-[0.8rem] md:text-[0.9rem]">
                +1 5589 55488 55s
              </p>
            </div>
          </div>

          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115805.99464055755!2d91.77846173884075!3d24.900119139446577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1708281175005!5m2!1sen!2sbd"
              style={{
                border: "0",
                width: "100%",
                height: "300px",
              }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form className="contact w-full md:w-[60%] px-4 shadow-lg flex flex-col gap-6 py-6">
          <div className="flex md:flex-row flex-col items-center gap-5 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-[#e9e9e9] py-3 px-4 outline-none w-full"
                placeholder="Name"
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                name="Email"
                id="Email"
                className="border border-[#e9e9e9] py-3 px-4 outline-none w-full"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="Subject">Subject</label>
            <input
              type="text"
              name="Subject"
              id="Subject"
              className="border border-[#e9e9e9] py-3 px-4 outline-none w-full"
              placeholder="Subject"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="Subject">Subject</label>
            <textarea
              type="text"
              name="Subject"
              id="Subject"
              className="border border-[#e9e9e9] py-3 px-4 outline-none w-full h-[220px]"
              placeholder="Subject"
            />
          </div>

          <button
            type="submit"
            className="mx-auto w-[60%] md:w-[30%] py-2 px-6 bg-brandColor outline-none rounded text-white text-[1rem] hover:bg-transparent transition-all duration-300 border hover:text-brandColor border-brandColor cursor-pointer mb-9"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
