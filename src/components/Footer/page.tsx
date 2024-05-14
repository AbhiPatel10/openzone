import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font w-full  mt-11 ">
      <div className="  py-24 px-10 flex justify-evenly items-center  md:flex-row md:flex-nowrap flex-wrap flex-col ">
        <div className="w-auto flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Link href="/">
              <h1 className="text-3xl font-bold text-primary">OpenZone</h1>
            </Link>
        </a>
          <p className="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:flex-nowrap justify-center align-middle items-center md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="md:w-2/6 w-full px-4">
            <h2 className="title-font font-bold  text-gray-900 tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="md:w-2/6 w-full px-4">
            <h2 className="title-font font-bold  text-gray-900 tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="md:w-2/6 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 flex  justify-center items-center">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4   sm:py-2 sm:mt-0 mt-4">
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
      </div>
    </footer>
  );
};

export default Footer;
