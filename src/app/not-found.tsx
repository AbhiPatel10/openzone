import React from "react";
import Link from "next/link";
export default function NotFound() {
    return ( 
      <>
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#0C0C0C]">
          <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
          <div className="bg-[#90D26D] px-2 text-sm rounded rotate-12 absolute">
            Out of Zone
          </div>
          <button className="mt-5">
            <a className="relative inline-block text-sm font-medium text-[#90D26D] group active:text-orange-500 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#90D26D] group-hover:translate-y-0 group-hover:translate-x-0" />
              <span className="relative block px-8 py-3 bg-[#0C0C0C] border border-current">
                <Link href="/">
                Return Home
                </Link>
              </span>
            </a>
          </button>
        </main>

        </>
    )
}