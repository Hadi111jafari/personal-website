interface HighlightProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Highlighter({
  children,
  className,
  size = "md",
}: HighlightProps) {
  const sizeClass = {
    sm: "before:h-2.5 md:before:h-2.5",
    md: "before:h-4 md:before:h-6",
    lg: "before:h-8 md:before:h-12",
  }[size];

  return (
    <span
      className={`${className} relative inline-block pr-2.5 ${sizeClass}  before:absolute before:inset-x-0 before:bottom-1 before:bg-[#dcb688]/25 before:rounded-sm before:-z-10`}
    >
      {children}
    </span>
  );
}
