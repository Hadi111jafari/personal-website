import React from "react";
import CornerSVG from "@/components/CornerSVG";
import { FaArrowRight } from "react-icons/fa6";

interface CornerArrowProps {
  icon?: React.ComponentType<{ className?: string }>;
  ariaLabel: string;
}

export default function CornerArrow({
  icon: Icon = FaArrowRight,
  ariaLabel,
}: CornerArrowProps) {
  return (
    <button
      className="absolute right-0 bottom-0 bg-background w-18 h-18 mt-5 ml-5 rounded-tl-4xl mb-0 mr-0 flex items-center justify-center"
      aria-label={ariaLabel}
    >
      <CornerSVG className="absolute w-5 right-0 bottom-18 transform rotate-180 scale-105" />
      <div className="relative p-5 bg-foreground text-background rounded-full group flex items-center justify-center">
        <Icon className="group-hover:scale-135 group-hover:-rotate-30 transition-all duration-300" />
      </div>
      <CornerSVG className="absolute transform w-5 rotate-180 -left-5 bottom-0" />
    </button>
  );
}
