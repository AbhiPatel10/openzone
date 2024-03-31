import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-gray-900 h-screen flex flex-col justify-center items-center text-center p-4 w-full">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Empower Open Source. Build Together.</h1>
      <p className="text-lg md:text-xl lg:text-2xl text-white mt-4 md:mt-6 lg:mt-8">
      Open Zone: Connect, Collaborate, Contribute.
      </p>
      <Button className="mt-8 text-black border-white" variant="outline">
        Get Started
      </Button>
    </section>
  )
}