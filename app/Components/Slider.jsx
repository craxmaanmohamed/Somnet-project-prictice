"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <Swiper
    style={{
      '--swiper-navigation-color': '#2babdad7',
      '--swiper-pagination-color': '#2babdad7',
    }}
    speed={600}
    parallax={true}
    pagination={{
      clickable: true,
    }}
      autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    navigation={true}
    modules={[Parallax,Autoplay, Pagination, Navigation]}
    className="bg-backroundimg h-100vh p-0 m-0 box-border  bg-cover bg-center"
  >
    <div
      slot="container-start"
      className="parallax-bg h-15v"
      data-swiper-parallax="-23%"
    ></div>
    <SwiperSlide>
    <div className="container px-12 py-12 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-extrabold text-white  lg:text-4xl">
              DO NOT BE SLOWED DOWN <br /> Switch to{' '}
              <span class="text-pr-color decoration-orange-300 underline decoration-4">Somnet Telecome</span>
              </h1>

              <p className="mt-3 mb-7 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>
              <button className="w-full p-2 text-l  font-bold  border-2 border-pr-color  text-white uppercase transition-colors duration-500 ease-in-out transform bg-pr-color hover:border-white  rounded-md  lg:w-auto  hover:bg-transparent hover:text-white  fmd:mx-4 md:my-0  px-5 py-2 mt-6 text-sm tracking-wider">
                Start Now
              </button>
               
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image
              className=" w-auto h-75v lg:max-w-3xl"
              src="/images/homeimg1.png" width={200} height={100}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="container px-12 py-8 mx-auto">
        <div className="items-center lg:flex">
      

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <Image
              className=" w-auto h-80v lg:max-w-3xl"
              src="/images/homeimg2.png" width={200} height={100}
              alt="Catalogue-pana.svg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl uppercase font-extrabold text-white  lg:text-4xl">
             GET US voice call unlimited 
                <span className="text-pr-color "> data </span>
              </h1>

              <p className="mt-3 mb-7 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>
              <button className="w-full p-2 text-l  font-bold  border-2 border-pr-color  text-white uppercase transition-colors duration-500 ease-in-out transform bg-pr-color hover:border-white  rounded-md  lg:w-auto  hover:bg-transparent hover:text-white  fmd:mx-4 md:my-0  px-5 py-2 mt-6 text-sm tracking-wider">
                Start Now
              </button>
               
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  )
}
