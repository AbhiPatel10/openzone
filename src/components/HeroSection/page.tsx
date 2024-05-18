"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const [text, count] = useTypewriter({
    words: ["Connect", "Collaborate", "Contribute"],
    loop: true,
    delaySpeed: 2500,
  });
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 ... h-screen flex flex-col justify-center items-center text-center p-4 w-full">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        Empower Open Source. Build Together.
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-white mt-4 mr-2 md:mt-6 lg:mt-8 underline decoration-secondary underline-offset-8">
        Open Zone: {text} <Cursor />
      </p>
      <Button
        className="mt-8 text-black bg-secondary border-primary hover:scale-125 hover:bg-secondary transition-transform ease-in-out rounded-full"
        variant="outline"
      >
        <Link href="/projects">Get Started</Link>
      </Button>
    </section>
  );
}
