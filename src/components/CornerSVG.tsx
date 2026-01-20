import React from "react";

export default function CornerSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-background ${className}`}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" />
    </svg>
  );
}
