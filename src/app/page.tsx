import Footer from "@/components/Footer/page";
import Navbar from "@/components/Navbar/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Footer />
    </main>
  );
}
