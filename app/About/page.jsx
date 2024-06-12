"use client";
import React from 'react'
import Image from 'next/image'
import { MdVisibility } from "react-icons/md";
import { SiTransmission } from "react-icons/si";

export default function About() {
  return (
    <>
       {/* Header Personal */}
       <div className='bg-aboutbgimg flex h-96 bg-cover bg-repeat bg-center justify-center items-center'>
        <h1 className='text-white uppercase font-extrabold font-sans text-4xl mt-14 md:text-150  '>About Us</h1>
      </div>
      {/* Header Personal end */}



{/* about start */}
      <div className=" bg-white   py-8">



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
              beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.
              beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.
            </p>

            

          </div>
        </div>
      </div>
    </div>
    {/* vition mission start */}
<section class=" bg-gray-50 sm:py-16 ">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-8  xl:gap-x-20">
            <div class="flex items-start bg-white p-10">
                <MdVisibility class="flex-shrink-0 w-10 h-10 text-pr-color"/>
                <div class="ml-6">
                    <p class="text-base font-medium text-black/50">Our vission</p>
                    <p class="mt-4   text-gray-900"> Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                  
                </div>
            </div>

            <div class="flex items-start  bg-white p-10">
                
            <SiTransmission class="flex-shrink-0 w-10 h-10 text-pr-color"/>

                <div class="ml-6">
                    <p class="text-base font-medium text-black/50">Our Mission</p>
                    <p class="mt-4   text-gray-900"> Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </div>
        </div>
    </div>
</section>


    </>
   
  )
}