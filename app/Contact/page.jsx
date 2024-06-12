import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";

export default function page() {
  return (
    <>
    {/* <Header/> */}
  <div className='bg-contactbgimg flex h-96 bg-cover bg-repeat bg-center justify-center items-center'>
    <h1 className='text-white uppercase font-extrabold font-sans text-4xl mt-14 md:text-150  '>Contact Us</h1>
  </div>
    <section class="bg-white p-6">
    <div class="container  py-12 mx-auto">
        <div>

            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Chat to our friendly team</h1>

            <p class="mt-3 text-gray-500 ">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">

                <div >
                    <span class="inline-block p-3 text-white rounded-full bg-pr-color">
                       <MdEmail className="w-5 h-5" />
                    </span>

                    <h2 class="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                    <p class="mt-2 text-sm text-gray-600">Our friendly team is here to help.</p>
                    <p class="mt-2 text-sm text-black">customercare@somnettelecom.com</p>
                </div>

                <div>
                    <span class="inline-block p-3  text-white rounded-full bg-pr-color">
                    <IoIosChatboxes className="w-5 h-5" />

                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-black">Live chat</h2>
                    <p class="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
                    <p class="mt-2 text-sm text-black">Start new chat</p>
                </div>

                <div>
                    <span class="inline-block p-3  text-white rounded-full bg-pr-color">
                    <FaLocationDot className="w-5 h-5" />

                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800">Office</h2>
                    <p class="mt-2 text-sm text-gray-600">Come say hello at our office HQ.</p>
                    <p class="mt-2 text-sm text-black">Address: Maka Al Mukarama Road, Mogadishu, Somalia</p>
                </div>

                <div>
                    <span class="inline-block p-3  text-white rounded-full bg-pr-color">
                    <FaPhone className="w-5 h-5" />

                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800 ">Phone</h2>
                    <p class="mt-2 text-sm text-gray-500 ">Sat-Fri from 8am to 5pm.</p>
                    <p class="mt-2 text-sm text-black">+252-680000000</p>
                </div>
            </div>

{/* forms */}
            <div class=" py-6 rounded-lg border-pr-color border-2">
                <form className=' p-8'>
                    
                    <div class="grid gap-6 md:items-center md:flex ">
                        <div class="flex-1 ">
                            <label class="block mb-2 text-sm text-gray-600">First Name</label>
                            <input type="text" placeholder="mohamed " className="block w-full  p-2.5  mt-2 border-2 border-spr-color rounded-lg" />
                        </div>

                        <div class="flex-1  md:mt-0">
                            <label class="block mb-2 text-sm text-gray-600 ">Last Name</label>
                            <input type="text" placeholder="faarah" class="block w-full  p-2.5 mt-2 border-2 border-spr-color rounded-lg" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-600">Email address</label>
                        <input type="email" placeholder="som@example.com" class="block w-full p-2.5 mt-2 border-2 border-spr-color rounded-lg" />
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-600">Message</label>
                        <textarea class="block w-full h-32  p-2.5 mt-2 border-2 border-spr-color rounded-lg" placeholder="Message"></textarea>
                    </div>
                    <button class="relative  w-full font-medium  py-2 mt-10 overflow-hidden border-2 border-pr-color rounded-md text-white bg-pr-color shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-pr-color h hover:before:w-2/4 hover:before:bg-white hover:after:w-2/4 hover:after:bg-white"><span class="relative z-10"> Send message</span></button>

                    {/* <button class=" w-full  py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 ">
                        Send message
                    </button> */}
                </form>
            </div>

        </div>
    </div>
</section>
{/* <Footer/> */}
</>
  )
}
