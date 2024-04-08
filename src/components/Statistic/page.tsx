import React from 'react'
import { IoGitBranchOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { PiWarningOctagonDuotone } from "react-icons/pi";

const Statistic = ({user_data}:any) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex items-center justify-center flex-col">
                        <IoGitBranchOutline fontSize={40}/>
                        <p className="leading-relaxed text-2xl">Repositories</p>
                        <span className='font-bold text-xl '>{user_data?.public_repos + user_data?.total_private_repos}</span>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex items-center justify-center flex-col">
                        <FaCode fontSize={40}/>
                        <p className="leading-relaxed">Commits</p>
                        <span className='font-bold text-xl '>10</span>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex items-center justify-center flex-col">
                        <IoGitBranchOutline fontSize={40}/>
                        <p className="leading-relaxed">Pull Requests</p>
                        <span className='font-bold text-xl '>10</span>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full flex items-center justify-center flex-col">
                        <PiWarningOctagonDuotone fontSize={40}/>
                        <p className="leading-relaxed">Issues</p>
                        <span className='font-bold text-xl '>10</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistic