import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import {NextAuthProvider} from "../app/provider"
import {Navbar} from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import {Preloader} from "@/components/Navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Zone",
  description: "Open Zone is a dynamic platform for open-source developers, offering a centralized space to showcase contributions, discover projects, and engage in collaborative events. Join our vibrant community and amplify your impact on the world of open source!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={inter.className}>
          <Preloader/>
          <Navbar />
          {children}
          <Footer />
        </body>
      </NextAuthProvider>
    </html>
  );
}
