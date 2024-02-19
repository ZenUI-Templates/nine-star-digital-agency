import React, { useState } from "react";

// react icons
import { FaChevronDown } from "react-icons/fa";

const Faq = () => {
  const accordingData = [
    {
      title: "Non consectetur a erat nam at lectus urna duis?",
      description:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      title:
        "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      description:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
    {
      title:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?",
      description:
        "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
    },

    {
      title: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      description:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },

    {
      title:
        "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
      description:
        "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
    },
    {
      title:
        "Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?",
      description:
        "Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.",
    },
  ];

  const [isAccordingOpen, setIsAccordingOpen] = useState(0);
  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <section
      id="Faq"
      className="max-w-[1400px] mx-auto  py-12 px-6 bg-[#fef8f5]"
    >
      <h1 className="text-center text-[1rem] md:text-[2rem] text-[#ccc]">
        Faq
      </h1>

      <div className="text-center">
        <h2 className="text-[1.4rem] md:text-[2.5rem] text-textColor mt-4">
          Frequently Asked Questions
        </h2>
        <div className="w-[80px] bg-brandColor h-[4px] mx-auto mt-2"></div>
      </div>

      <div className="flex gap-3 flex-col w-full md:w-[80%] text-textColor mt-9 mx-auto">
        {accordingData?.map((according, index) => (
          <article key={index} className="border-b border-border rounded py-3">
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full"
              onClick={() => handleClick(index)}
            >
              <h2
                className={`${
                  isAccordingOpen === index && "text-brandColor"
                } font-[600] text-[1rem] md:text-[1.2rem] `}
              >
                {according.title}
              </h2>
              <p>
                <FaChevronDown
                  className={`text-[1rem] md:text-[1.2rem] text-text transition-all duration-300 ${
                    isAccordingOpen === index && "rotate-[180deg] !text-primary"
                  }`}
                />
              </p>
            </div>
            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                isAccordingOpen === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-text text-[0.8rem] md:text-[0.9rem] overflow-hidden">
                {according.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Faq;
