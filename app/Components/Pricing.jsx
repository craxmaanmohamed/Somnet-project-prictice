"use client";
import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

export default function Pricing() {
  return (
    <section class="h-full bg-cover bg-center bg-fixed bg-no-repeat bg-CarPricing dark:bg-pr-color px-8">
    <div class="container  py-8 mx-auto">

        <h1 class="text-2xl text-center font-semibold  text-white capitalize lg:text-3xl">Choose The Best Data Plan </h1>
        <div class="grid gap-6 mt-16  sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {/* one */}
            <div class="px-6  py-4 bg-white border-2 border-pr-color hover:scale-scale transition-all duration-300 rounded-lg">
                <p class="text-lg font-medium text-black">Basic</p>
                <h4 class="mt-2 text-4xl font-semibold text-white dark:text-gray-400">$5
                    <span class="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>


                <div class="mt-8  space-y-8">
                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-black">Internet with a 25 GB</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-black">Connect multiple users</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-black">1 MonthB</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-black">Super Speed</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-black">Unlimited devices</span>
                    </div>
                </div>
                <button class="relative w-full font-medium  py-2 mt-10 overflow-hidden border-2 border-pr-color rounded-md text-white bg-pr-color shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-pr-color  hover:before:w-full hover:before:bg-white hover:after:w-2/4 hover:after:bg-white"><span class="relative z-10">GET IT NOW</span></button>

            </div>
            {/* two */}

            <div class="px-6 py-4 mb-4 -mt-3.5 bg-spr-color border-white border  hover:scale-scale transition-all duration-300 rounded-lg">
                <p class="text-lg font-medium text-pr-color">Standard</p>
                <h4 class="mt-2 text-4xl font-semibold text-white dark:text-gray-300">$5
                    <span class="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>


                <div class="mt-8  space-y-8">
                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-white">Internet with a 99 GB</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-white">Connect multiple users</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-white">1 MonthB</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-white">Super Speed</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />

                        <span class="mx-4 text-white">Unlimited devices</span>
                    </div>
                </div>

                <button class="relative w-full font-medium  py-2 mt-10 overflow-hidden border-2 border-pr-color rounded-md text-white bg-pr-color shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-pr-color  hover:before:w-full hover:before:bg-white hover:after:w-2/4 hover:after:bg-white"><span class="relative z-10">GET IT NOW</span></button>
            </div>
            {/* tree */}

            <div class="px-6  py-4 bg-white border-2 border-pr-color hover:scale-scale transition-all duration-300 rounded-lg">
                <p class="text-lg font-medium text-black">Premium</p>
                <h4 class="mt-2 text-4xl font-semibold text-white dark:text-gray-400">$120
                    <span class="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span></h4>


                <div class="mt-8  space-y-8">
                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-black">Internet with a 25 GB</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-black">Connect multiple users</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-black">1 MonthB</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />


                        <span class="mx-4 text-black">Super Speed</span>
                    </div>

                    <div class="flex items-center">
                        <FaRegCheckCircle class="w-5 h-5 text-pr-color" />

                        <span class="mx-4 text-black">Unlimited devices</span>
                    </div>
                </div>
                <button class="relative w-full font-medium  py-2 mt-10 overflow-hidden border-2 border-pr-color rounded-md text-white bg-pr-color shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-pr-color  hover:before:w-full hover:before:bg-white hover:after:w-2/4 hover:after:bg-white"><span class="relative z-10">GET IT NOW</span></button>

            </div>

        </div>
    </div>
</section>
  )
}
