"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"




export default function HeroSection() {
  const router = useRouter();
  const onClickGetStarted = () => { 
    router.push("/projects")
  }

  return (
    <section className="bg-gray-900 h-screen flex flex-col justify-center items-center text-center p-4 w-full">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-[20px]">Empower Open Source. </h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Build Together. </h2>
      <p className="text-md md:text-lg lg:text-xl text-white mt-4 md:mt-6 lg:mt-8">
      Open Zone: Connect, Collaborate, Contribute.
      </p>
      <Button className="mt-8 text-black border-white" variant="outline" onClick={onClickGetStarted}>
        Get Started
      </Button>
    </section>
  )
}