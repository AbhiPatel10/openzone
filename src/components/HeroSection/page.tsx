import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 ... h-screen flex flex-col justify-center items-center text-center p-4 w-full">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        Empower Open Source. Build Together.
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-white mt-4 mr-2 md:mt-6 lg:mt-8 underline decoration-secondary underline-offset-8">
        Open Zone: Connect, Collaborate, Contribute.
      </p>
      <Button
        className="mt-8 text-black bg-secondary border-primary hover:scale-125 hover:bg-secondary transition-transform ease-in-out rounded-full"
        variant="outline"
      >
        Get Started
      </Button>
    </section>
  );
}
