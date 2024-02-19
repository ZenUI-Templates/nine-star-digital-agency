import React from "react";

const Team = () => {
  return (
    <section id="team" className="max-w-[1400px] mx-auto  py-12 px-6">
      <h1 className="text-center text-[1rem] md:text-[2rem] text-[#ccc]">
        Team
      </h1>

      <div className="text-center">
        <h2 className="text-[1.4rem] md:text-[2.5rem] text-textColor mt-4">
          Our team is always here to help
        </h2>
        <div className="w-[80px] bg-brandColor h-[4px] mx-auto mt-2"></div>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5 mt-9">
        <img src="/team/team-1.jpg" alt="" className="w-full object-cover" />
        <img src="/team/team-2.jpg" alt="" className="w-full object-cover" />
        <img src="/team/team-3.jpg" alt="" className="w-full object-cover" />
        <img src="/team/team-4.jpg" alt="" className="w-full object-cover" />
      </div>
    </section>
  );
};

export default Team;
