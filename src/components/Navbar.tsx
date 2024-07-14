import React from "react";
// import MagneticEffect from "./Magnet";
import FramerMagneticEffect from "./FramerMagneticEffect";

const links = ["about", "contact", "work"];

function Navbar() {
  return (
    <div className="w-[95vw] py-4 mx-auto flex items-center justify-center">
      <div className="flex-[1]">
        <span className="text-2xl">shah.</span>
      </div>
      <div className="flex-[1] flex items-center justify-end gap-10">
        {links.map((item, i) => (
          <FramerMagneticEffect key={i}>
            <span className="cursor-pointer text-sm border border-black py-2 px-4 rounded-full transition-colors duration-300 hover:text-white hover:bg-black">
              {item}
            </span>
          </FramerMagneticEffect>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
