"use client";
import { React, useState } from 'react';
import Link from 'next/link';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    
    <nav id='nav' className="fixed z-10  w-full  bg-gray-100 h-16 flex justify-center items-center">
  <div className="container px-6 mx-auto md:flex md:justify-between md:items-center">
    <div className="flex items-center justify-between">
      <a href="#">
        <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
      </a>
      <div className="flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="text-pr-color hover:text-gray-600 focus:outline-none"
          aria-label="toggle menu"
        >
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
         
          )}
        </button>
      </div>
    </div>
    <div
      className={`${
        isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
      } mt-4 inset-x-0 z-20 w-full py-4 transition-all duration-500 ease-in-out fixed bg-slate-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
    >
      <div className="flex h-full justify-center items-center flex-col md:flex-row">
        <Link   onClick={() => setIsOpen(!isOpen) } className="my-2 text-black max-md:text-white transition-colors duration-300 transform hover:text-pr-color md:mx-4 md:my-0" href="/">
          Home
        </Link>
        <Link onClick={() => setIsOpen(!isOpen) } className="my-2 text-black max-md:text-white transition-colors duration-300 transform hover:text-pr-color md:mx-4 md:my-0" href="About">
          About
        </Link>
        <Link onClick={() => setIsOpen(!isOpen) } className="my-2 text-black max-md:text-white transition-colors duration-300 transform hover:text-pr-color md:mx-4 md:my-0" href="/Personal">
          Personal
        </Link>
        <Link onClick={() => setIsOpen(!isOpen) } className="my-2 text-black max-md:text-white transition-colors duration-300 transform hover:text-pr-color md:mx-4 md:my-0" href="/Business">
          Business
        </Link>
        <Link onClick={() => setIsOpen(!isOpen) } className="my-2 text-black max-md:text-white transition-colors duration-300 transform hover:text-pr-color md:mx-4 md:my-0" href="/Blog">
          Blog
        </Link>
        <Link onClick={() => setIsOpen(!isOpen) } className=" text-center p-2 text-l font-bold border-2 border-pr-color text-white uppercase transition-colors duration-500 ease-in-out transform bg-pr-color rounded-md lg:w-auto hover:bg-transparent hover:text-pr-color focus:outline-none md:mx-4 md:my-0" href="/Contact">
          Contact Us
        </Link>
        <a className="relative text-pr-color hover:text-black max-md:hover:text-white transition-colors duration-300 transform" href="#">
          {/* <svg className="w-8 h-8 m-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg> */}
        </a>
      </div>
    </div>
  </div>
</nav>

    </>
  );
}
