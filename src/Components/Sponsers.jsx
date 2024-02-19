import React from "react";

const Sponsers = () => {
  return (
    <section className="max-w-[1400px] mx-auto  py-12 px-6 bg-[#fef8f5]">
      <h1 className="text-center text-[1rem] md:text-[2rem] text-[#ccc]">
        Clients
      </h1>

      <div className="text-center">
        <h2 className="text-[1.4rem] md:text-[2.5rem] text-textColor mt-4">
          They trusted us
        </h2>
        <div className="w-[80px] bg-brandColor h-[4px] mx-auto mt-2"></div>
      </div>

      <div className="sponser w-full overflow-x-scroll flex items-center gap-28 mt-9">
        <img
          src="/clients/client-1.png"
          alt=""
          className="w-[60px] md:w-[90px] object-cover"
        />
        <img
          src="/clients/client-2.png"
          alt=""
          className="w-[60px] md:w-[90px] object-cover"
        />
        <img
          src="/clients/client-3.png"
          alt=""
          className="w-[60px] md:w-[90px] object-cover"
        />
        <img
          src="/clients/client-4.png"
          alt=""
          className="w-[60px] md:w-[90px] object-cover"
        />
        <img
          src="/clients/client-5.png"
          alt=""
          className="w-[60px] md:w-[90px] object-cover"
        />
        <img
          src="/clients/client-6.png"
          alt=""
          className="w-[60px] md:w-[90px] object-cover"
        />
        <img
          src="/clients/client-7.png"
          alt=""
          className="w-[60px] md:w-[90px] object-cover"
        />
        <img
          src="/clients/client-8.png"
          alt=""
          className="w-[60px] md:w-[90px] object-cover"
        />
      </div>
    </section>
  );
};

export default Sponsers;
