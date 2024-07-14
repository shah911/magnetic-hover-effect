import React, { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface MagneticEffectProps {
  children: ReactNode;
}

export default function MagneticEffect({ children }: MagneticEffectProps) {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentMagnetic = magnetic.current;
    if (!currentMagnetic) return;

    const xTo = gsap.quickTo(currentMagnetic, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(currentMagnetic, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        currentMagnetic.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    currentMagnetic.addEventListener("mousemove", mouseMove);
    currentMagnetic.addEventListener("mouseleave", mouseLeave);

    return () => {
      if (currentMagnetic) {
        currentMagnetic.removeEventListener("mousemove", mouseMove);
        currentMagnetic.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);

  return React.cloneElement(children as React.ReactElement, { ref: magnetic });
}
