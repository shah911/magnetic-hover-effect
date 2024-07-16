"use client";
import FramerMagneticEffect from "@/components/FramerMagneticEffect";
// import MagneticEffect from "@/components/Magnet";
import Navbar from "@/components/Navbar";

const words = ["Magnetic", "Hover", "Effect"];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="fixed top-0">
        <Navbar />
      </div>
      {words.map((item, i) => (
        <FramerMagneticEffect key={i}>
          <span className="text-2xl md:text-4xl cursor-pointer 2xl:leading-[125%] 2xl:text-[3vw]">
            {item}
          </span>
        </FramerMagneticEffect>
      ))}
      <p className="text-center mt-5 2xl:mt-[3vw] 2xl:text-[1.25vw]">
        Hover over the nav links or words to observe the animation.
      </p>
    </main>
  );
}
