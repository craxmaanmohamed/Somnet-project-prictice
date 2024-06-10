"use client";
import React from 'react'
import Image from 'next/image'
export default function AboutHome() {
  return (
    
  
   
    <div className=" bg-white   py-8">
      
      <div className='flex justify-center align-middle'>
        
     <div>
    <h1 className="text-3xl text-center font-extrabold text-pr-color lg:text-4xl p-0">
    <span className="text-2xl font-semibold uppercase text-black  lg:text-3xl">About Us</span>
    </h1>
    <div>
        <span class="inline-block w-3 h-1 ml-1 mb-6 bg-pr-color rounded-full"></span>
        <span class="inline-block w-1 h-1 ml-1 mr-1 mb-6 bg-pr-color rounded-full"></span>
        <span class="inline-block w-40 h-1 mb-6 bg-pr-color rounded-full"></span>
        <span class="inline-block w-1 h-1 ml-1 mb-6 bg-pr-color rounded-full"></span>
        <span class="inline-block w-3 h-1 ml-1 mb-6 bg-pr-color rounded-full"></span>
    </div>
    </div>
    </div>



      <div className="items-center p-4 lg:flex">


        <div className="flex items-center justify-center w-full mt-2 lg:mt-0 lg:w-1/2">
          <Image
            className="w-full h-1/2 lg:max-w-3xl"
            src="/images/aboutimg.png"
            alt="Catalogue-pana.svg"
            width={200} height={100}
          />
        </div>
        <div className="w-full lg:w-1/2">


          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-extrabold text-black  lg:text-4xl">
              Somnet is fastest 4G LTE Network in
              <span className="text-pr-color ">  Somalia </span>
            </h1>

            <p className="mt-3 mb-7 text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.
            </p>
            <button class="relative w-42 px-10 font-medium  py-2 mt-10 overflow-hidden border-2 border-pr-color rounded-md text-white bg-pr-color shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-pr-color  hover:before:w-full hover:before:bg-white hover:after:w-2/4 hover:after:bg-white"><span class="relative z-10">  Learn More About Us</span></button>

            

          </div>
        </div>
      </div>
    </div>
  )
}
