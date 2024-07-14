"use client";
import FramerMagneticEffect from "@/components/FramerMagneticEffect";
// import MagneticEffect from "@/components/Magnet";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="fixed top-0">
        <Navbar />
      </div>
      <FramerMagneticEffect>
        <span className="text-2xl md:text-4xl cursor-pointer">Magnetic</span>
      </FramerMagneticEffect>
      <FramerMagneticEffect>
        <span className="text-2xl md:text-4xl cursor-pointer">Hover</span>
      </FramerMagneticEffect>
      <FramerMagneticEffect>
        <span className="text-2xl md:text-4xl cursor-pointer">Effect</span>
      </FramerMagneticEffect>
      <p className="text-center mt-5">
        Hover over the nav links or words to observe the animation.
      </p>
    </main>
  );
}
