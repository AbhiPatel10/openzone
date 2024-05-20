"use client"

import Link from 'next/link'
import React from 'react'
import LoginButton from '../LoginButton/page'
import { ImHackernews } from 'react-icons/im'

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
                          <h1 className="text-1xl font-italic text-primary">OpenZone</h1>  
                           
                         <img src="data:image/png;base64,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"></img>
                     </Link>
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            *
                        </button>
                    </div>
                </div>
                <div
                    className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
                        }`}
                >
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {menus.map((item, idx) => (
                            <li key={idx} className="text-gray-600 hover:transition hover:text-indigo-600 hover:bg-slate-200 hover:p-2 duration-300 ease-in-out rounded-lg">
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}

                        <li className='py-2 px-5 bg-black text-white rounded hover:transition duration-200 ease hover:bg-slate-700'><LoginButton /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar