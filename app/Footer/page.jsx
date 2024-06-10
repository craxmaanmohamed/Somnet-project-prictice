import React from 'react'
import Image from 'next/image'
import { FaFacebook ,FaWhatsapp} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer class="bg-white p-8 dark:bg-gray-900">
    <div class="container  py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div class="sm:col-span-2">
                <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>

                <div class="flex  flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>
            
                    <button class="relative ml-4 w-32 font-medium  py-2 mt-10 overflow-hidden border-2 border-pr-color rounded-md text-white bg-pr-color shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-pr-color h hover:before:w-2/4 hover:before:bg-white hover:after:w-2/4 hover:after:bg-white"><span class="relative z-10">subscribe</span></button>

                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Blog</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Business
</a>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 dark:text-white">CONTACT US</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Customer Service: 100</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Telephone: +252-680000000</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Address: Maka Al Mukarama Road, Mogadishu, Somalia</a>
                </div>
            </div>
        </div>
        
        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>
        
        <div class="flex items-center justify-between">
            <a href="#">
                <Image width={100 }height={100} class="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt=""/>
            </a>
            
            <div class="flex justify-center items-center mx-2">
                <a href="https://www.facebook.com/Somnettelecom" class="mx-2 text-pr-color transition-colors duration-300  hover:text-white" aria-label="Reddit">
                    <FaFacebook className='w-6 h-6'/>
                </a>

                <a href="+252-680000000" class="mx-2 text-pr-color transition-colors duration-300  hover:text-white" aria-label="Reddit">
                    <FaWhatsapp className='w-6 h-8'/>
                </a>

                <a href="https://www.x.com/Somnettelecom" class="mx-2 text-pr-color transition-colors duration-300  hover:text-white" aria-label="Reddit">
                    <FaXTwitter className='w-6 h-6'/>
                </a>
            </div>
        </div>
    </div>
</footer>
  )
}
