import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-900">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Link href="/">
              <h1 className="text-3xl font-bold text-primary">OpenZone</h1>
            </Link>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 All rights reserved by <span className="text-primary">OpenZone</span>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="/" className="text-blue-400 transition hover:-translate-y-2 hover:scale-125 hover:cursor-pointer delay-100">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="/" className="ml-3  text-black transition hover:-translate-y-2 hover:scale-125 hover:cursor-pointer delay-100 ">
            <X className="w-5 h-5" />
          </a>
          <a href="/" className="ml-3 text-blue-500 transition hover:-translate-y-2 hover:scale-125 hover:cursor-pointer delay-100">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="/" className="ml-3 text-red-600 transition hover:-translate-y-2 hover:scale-125 hover:cursor-pointer delay-100">
            <Instagram className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
