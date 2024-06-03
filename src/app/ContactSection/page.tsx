import React from "react";
import Image from "next/image";
import contactimg from "../../../public/images/contactus.png"
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
const ContactSection = () => {
  return (
    <>
      <div id="contact">
        <div className="">
          <h2 className="text-center text-black  text-3xl font-bold ">
            Contact Us
          </h2>
          <p className="text-center m-3 text-xl">
            Get in touch with us in case of any queries,suggestions or feedback.
          </p>
          <div className="border-4 inline-block mx-3 md:mx-80 my-5 bg-slate-100">
            <div className="flex justify-center m-5">
              <div>
                <form action="" className="w-[175px] md:w-96">
                  <label
                    htmlFor="name-icon"
                    className="block mb-2 text-sm py-3 font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name-icon"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John Gomes"
                    />
                  </div>
                  <label
                    htmlFor="email-address-icon"
                    className="block mb-2 text-sm py-3 font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="email-address-icon"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="johngomes@user.com"
                    />
                  </div>

                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm py-3 font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                  <div className="px-36 py-7">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="">
                <Image
                  src={contactimg}
                  alt="contact-us"
                  width={550}
                  height={550}
                  className="my-14"
                />
                <div className="flex justify-center gap-20">
                  <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                    <Mail className="w-8 h-8 cursor-pointer" />
                  </div>
                  <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                    <Github className="w-8 h-8 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
