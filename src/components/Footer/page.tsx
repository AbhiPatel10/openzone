import React from 'react'
import { Facebook, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full">
    <div
      className="
      container
      flex flex-col flex-wrap
      justify-evenly
      px-8
      py-14
      mx-auto
      md:items-center
      lg:items-start
      md:flex-row md:flex-nowrap
    "
    >
      <div className="flex-shrink-0 w-96 mx-auto md:mx-0 md:text-left">
        <Link href={"/"} className="text-3xl text-white">
            OpenZone
        </Link>
        <p className="mt-2 text-s text-gray-400">
          Discover, Contribute, Thrive - OpenZone: Your gateway to open-source collaboration. Empowering both seasoned contributors and beginners alike to explore, engage, and make a difference in the world of open-source projects.
        </p>
      </div>
      <div className="flex justify-evenly w-full lg:flex flex-wrap max-md:mt-16">
        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
          <h2 className="mb-2 font-bold tracking-widest text-lg text-gray-100">
            Quick Links
          </h2>
          <ul className="mb-8 space-y-2 text-s list-none">
            <li>
              <Link href={"/"} className="text-gray-400 hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/projects"} className="text-gray-400 hover:text-gray-500" target='_blank'>
                Projects
              </Link>
            </li>
            <li>
              <Link href={"/ContactSection"} className="text-gray-400 hover:text-gray-500" target='_blank'>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={"PrivacyPolicy"} className="text-gray-400 hover:text-gray-500" >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"TermsAndConditions"} className="text-gray-400 hover:text-gray-500" >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
          <h2 className="mb-2 font-bold tracking-widest text-lg text-gray-100">
            Developer Links
          </h2>
          <ul className="mb-8 space-y-2 text-s list-none">
            <li>
              <Link href="https://github.com/AbhiPatel10/openzone/blob/main/README.md" className="text-gray-400 hover:text-gray-500" target='_blank'>
                Documentation
              </Link>
            </li>
            <li>
              <Link href="https://github.com/AbhiPatel10/openzone/issues" className="text-gray-400 hover:text-gray-500" target='_blank'>
                GitHub Issues
              </Link>
            </li>
            <li>
              <Link href="https://github.com/AbhiPatel10/openzone/pulls" className="text-gray-400 hover:text-gray-500" target='_blank'>
                GitHub PRs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex justify-center mt-4 space-x-4 lg:mt-2 py-4">
          <Link href="https://github.com/AbhiPatel10/openzone" target='_blank'>
            <Github className="h-10 w-12 text-slate-300 rounded-full border-2 p-[5px] hover:transition duration-200 ease hover:bg-slate-600" />
          </Link>
          <Link href="mailto:abhipatel.dev@gmail.com" target=''>
            <Mail className="h-10 w-12 text-slate-300 rounded-full border-2 p-[5px] hover:transition duration-200 ease hover:bg-slate-600" />
          </Link>
          <Link href="https://www.facebook.com" target='_blank'>
            <Facebook className="h-10 w-12 text-slate-300 rounded-full border-2 p-[5px] hover:transition duration-200 ease hover:bg-slate-600" />
          </Link>
          <Link href="https://twitter.com" target='_blank'>
            <Twitter className="h-10 w-12 text-slate-300 rounded-full border-2 p-[5px] hover:transition duration-200 ease hover:bg-slate-600" />
          </Link>
          <Link href="https://www.instagram.com" target='_blank'>
            <Instagram className="h-10 w-12 text-slate-300 rounded-full border-2 p-[5px] hover:transition duration-200 ease hover:bg-slate-600" />
          </Link>
          <Link href="https://www.linkedin.com/in" target='_blank'>
            <Linkedin className="h-10 w-12 text-slate-300 rounded-full border-2 p-[5px] hover:transition duration-200 ease hover:bg-slate-600" />
          </Link>
        </div>
    <div className="flex justify-center ">
      <p className="text-center text-gray-300 pb-4">
        &copy; {new Date().getFullYear()} All rights reserved by OpenZone.
      </p>
    </div>
  </footer>
  )
}

export default Footer
