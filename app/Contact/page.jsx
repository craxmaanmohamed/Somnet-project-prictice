import React from 'react'
import Header from '../Header/page'
import Footer from '../Footer/page'

export default function page() {
  return (
    <>
    {/* <Header/> */}
  <div className='bg-contactbgimg flex h-88v bg-cover bg-repeat bg-center justify-center items-center'>
    <h1 className='text-white uppercase font-extrabold font-sans text-4xl mt-14 md:text-150  '>Contact Us now</h1>
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
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg> */}
                    </span>

                    <h2 class="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                    <p class="mt-2 text-sm text-gray-600">Our friendly team is here to help.</p>
                    <p class="mt-2 text-sm text-black">customercare@somnettelecom.com</p>
                </div>

                <div>
                    <span class="inline-block p-3  text-white rounded-full bg-pr-color">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg> */}
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-black">Live chat</h2>
                    <p class="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
                    <p class="mt-2 text-sm text-black">Start new chat</p>
                </div>

                <div>
                    <span class="inline-block p-3  text-white rounded-full bg-pr-color">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg> */}
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-gray-800">Office</h2>
                    <p class="mt-2 text-sm text-gray-600">Come say hello at our office HQ.</p>
                    <p class="mt-2 text-sm text-black">Address: Maka Al Mukarama Road, Mogadishu, Somalia</p>
                </div>

                <div>
                    <span class="inline-block p-3  text-white rounded-full bg-pr-color">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg> */}
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
                            <input type="text" placeholder="mohamed " class="block w-full  p-2.5  mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1  md:mt-0">
                            <label class="block mb-2 text-sm text-gray-600 ">Last Name</label>
                            <input type="text" placeholder="faarah" class="block w-full  p-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-600">Email address</label>
                        <input type="email" placeholder="som@example.com" class="block w-full p-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-600">Message</label>
                        <textarea class="block w-full h-32  p-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
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
