"use client";

import { Button } from "@/components/ui/button";
import arrow1 from "@/app/assets/arrow1.svg";
import arrow2 from "@/app/assets/arrow2.svg";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  text: string;
  color: "transpent" | "primary";
}

const CustomButton = ({ text, color }: CustomButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const arrow1Ref = useRef<HTMLImageElement>(null);
  const arrow2Ref = useRef<HTMLImageElement>(null);

  // GSAP animation
  useGSAP(() => {
    const btn = btnRef.current;
    const a1 = arrow1Ref.current;
    const a2 = arrow2Ref.current;

    if (!btn || !a1 || !a2) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(a1, { x: 6, duration: 0.4, ease: "power3.out" }).to(
      a2,
      { x: 3, duration: 0.3, ease: "power3.out" },
      "-=0.3"
    );

    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  });

  // Choose arrow images based on color
  const mainArrow = color === "transpent" ? arrow1 : arrow1;
  const secondaryArrow = color === "transpent" ? arrow1 : arrow2;

  return (
    <Button
      ref={btnRef}
      className={cn(
        "flex items-center gap-2 px-10 h-14",
        color === "transpent" ? "bg-transparent text-white border font-extralight" : "bg-primary text-white font-medium"
      )}
    >
      <span>{text}</span>

      <div className="flex items-center gap-1 w-full overflow-hidden">
        <Image ref={arrow2Ref} src={secondaryArrow} alt="" width={6} height={6} />
        <Image ref={arrow1Ref} src={mainArrow} alt="" width={6} height={6} />
      </div>
    </Button>
  );
};

export default CustomButton;
