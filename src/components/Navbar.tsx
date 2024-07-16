import React from "react";
// import MagneticEffect from "./Magnet";
import FramerMagneticEffect from "./FramerMagneticEffect";

const links = ["work", "about", "contact"];

function Navbar() {
  return (
    <div className="w-[95vw] py-4 2xl:py-[2vw] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
      <div className="flex-[1]">
        <span className="text-2xl 2xl:text-[1.75vw] capitalize">shah.</span>
      </div>
      <div className="flex-[1] flex items-center justify-end gap-5 md:gap-10 2xl:gap-[4vw]">
        {links.map((item, i) => (
          <FramerMagneticEffect key={i}>
            <span className="cursor-pointer capitalize text-sm border border-black py-2 px-4 2xl:px-[1.5vw] 2xl:py-[0.75vw] 2xl:text-[1vw] rounded-full transition-colors duration-300 hover:text-white hover:bg-black">
              {item}
            </span>
          </FramerMagneticEffect>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
