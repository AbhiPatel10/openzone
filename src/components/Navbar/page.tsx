"use client"

import Link from 'next/link'
import React from 'react'
import LoginButton from '../LoginButton/page'
import { Icons } from '../ui/icons'
const Navbar = () => {
    const [state, setState] = React.useState(false)

    const menus = [
        { title: "Home", path: "/" },
        { title: "Projects", path: "/projects" },
        { title: "Contact Us", path: "/" },
    ]
    return (
        <nav className="bg-white w-full border-b md:border-0">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:justify-between md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <h1 className="text-3xl font-bold text-primary">OpenZone</h1>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            <Icons.menu/>
                        </button>
                    </div>
                </div>
                <div
                    className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                        }`}
                >
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {menus.map((item, idx) => (
                            <li key={idx} className="text-gray-600 hover:text-indigo-600">
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}

                        <li className='py-2 px-5 bg-black text-white rounded'><LoginButton /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar