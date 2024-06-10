"use client";
import { SiJsdelivr } from "react-icons/si";
import { TbPackages } from "react-icons/tb";
import { MdOutlineSendToMobile } from "react-icons/md";
import { MdWifi } from "react-icons/md";

export default function Services() {
  return (
    
    <section class="bg-slate-50 p-6 ">
    <div class="container  py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">explore some  awesome <span class="text-pr-color decoration-orange-300 underline decoration-4">services</span></h1>


        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">

            <div class="p-6 border-2 rounded-2xl bg-white border-pr-color ">
                <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-white bg-pr-color rounded-xl md:mx-4 ">
                    <TbPackages className="w-6 h-6"/>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-medium text-pr-color capitalize ">KAAFI PACKAGES</h1>

                        <p class="mt-3 text-gray-800 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>
            </div>

            <div class="p-6 border-2 rounded-2xl bg-white border-pr-color ">
                <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-white bg-pr-color rounded-xl md:mx-4 ">
                    <MdWifi className="w-6 h-6"/>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-medium text-pr-color capitalize ">4G internet speed</h1>

                        <p class="mt-3 text-gray-800 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>
            </div>

            <div class="p-6 border-2 rounded-2xl bg-white border-pr-color ">
                <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-white bg-pr-color rounded-xl md:mx-4 ">
                    <MdOutlineSendToMobile className="w-6 h-6"/>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-medium text-pr-color capitalize ">Send money</h1>

                        <p class="mt-3 text-gray-800 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>
            </div>

            <div class="p-6 border-2 rounded-2xl bg-white border-pr-color ">
                <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-white bg-pr-color rounded-xl md:mx-4 ">
                    <SiJsdelivr className="w-6 h-6"/>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-medium text-pr-color capitalize ">Call service 24/7</h1>

                        <p class="mt-3 text-gray-800 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}
