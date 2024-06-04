"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import LoginButton from '../LoginButton/page'
// import { MenuIcon } from 'lucide-react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () => {
    const [state, setState] = React.useState(false)

    const menus = [
        { title: "Home", path: "/" },
        { title: "Projects", path: "/projects" },
        { title: "Contact Us", path: "/ContactSection" },
    ]
    return (
        <nav className="sticky top-0 z-99 bg-white w-full border-b-3 border-b-[#151d2c] border-2">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:justify-between md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <h1 className="text-3xl font-bold text-primary">OpenZone</h1>
                    </Link>
                    <div className="md:hidden mr-3">
                        <button
                            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                           {state?<RxCross1 />:<RxHamburgerMenu/>}
                        </button>
                    </div>
                </div>

                <div
                    className={` pb-3  gap-2 mt-8  md:block md:pb-0 max-md:mt-0 md:mt-0 ${state ? "block absolute z-20 bg-white w-full p-0 left-0 mt-0" : "hidden"
                        }`}
                >
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-8 md:space-y-0 pb-3 md:pb-0 md:mt-0">
    <ul className="flex flex-col md:flex-row justify-center items-center md:space-y-0 md:space-x-6">
        {menus.map((item, idx) => (
            <li
                key={idx}
                className="text-gray-600 text-center  transition ease-in-out duration-300 hover:text-indigo-600 hover:bg-slate-200 px-4 py-2 rounded-lg"
            >
                <Link href={item.path}>{item.title}</Link>
            </li>
        ))}
    </ul>
    <div className="py-2 px-5 bg-black text-white rounded-md transition ease-in-out duration-200 hover:bg-slate-700">
        <LoginButton />
    </div>
</div>

                </div>
            </div>
        </nav>
    )
}

export const Preloader: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => { 
        setIsVisible(false);
      }, 2500);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <>
        {isVisible && (
          <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-900"></div>
          </div>
        )}
      </>
    );
  };
