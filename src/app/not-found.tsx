import Link from "next/link";
import { RiEmotionSadLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
      <div className="flex flex-col items-center max-w-md text-center">
        <RiEmotionSadLine className="text-8xl text-foreground/20 mb-6" />

        <h1 className="text-7xl md:text-8xl font-bold mb-4 text-foreground/90">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground/80">
          Page Not Found
        </h2>

        <p className="text-lg mb-8 text-foreground/60 leading-relaxed">
          The page you&#39;re looking for doesn&#39;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-foreground rounded-full font-medium hover:opacity-90 active:opacity-80 transition-opacity duration-200"
        >
          <FaArrowLeft className="text-xl" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
