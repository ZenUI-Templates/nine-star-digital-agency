import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-[#fef8f5] py-16 px-6 max-w-[1400px] mx-auto  flex flex-col items-center justify-center">
      <h3 className="text-textColor text-[1.5rem]">Join Our Newsletter</h3>
      <p className="mt-3 text-textColor md:text-start text-center">
        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
      </p>

      <div className="relative w-full md:w-[45%] mt-6">
        <input
          type="text"
          name=""
          id=""
          className="py-3.5 px-4 outline-none border-none bg-white shadow-md w-full"
        />
        <button
          type="submit"
          className="h-full px-5 bg-brandColor outline-none rounded text-white text-[1rem] hover:bg-transparent transition-all duration-300 border hover:text-brandColor border-brandColor cursor-pointer absolute top-0 right-0 shadow-md"
        >
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
