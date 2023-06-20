"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Featured = () => {
  return (
    <div className="pb-[6rem] px-[1rem] sm:px-[3rem] md:px-[5rem] lg:px-[10rem] xl:px-[12rem] py-[2rem]">
        <div className='my-12'>
            <p className='text-2xl md:text-4xl text-gray-700 font-extrabold leading-10'>Got Featured</p>
        </div>
        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        >
            <SwiperSlide>
            <Image src="EconomicTimes.webp" alt="nothing" height="100" width="100" className="h-full w-auto"/>
            </SwiperSlide>
            <SwiperSlide>
            <Image src="Inc42.webp" alt="nothing" height="100" width="100" className="h-full w-auto"/>
            </SwiperSlide>
            <SwiperSlide>
            <Image src="mint.webp" alt="nothing" height="100" width="100" className="h-full w-auto"/>
                
            </SwiperSlide>
            <SwiperSlide>
            <Image src="YourStory.webp" alt="nothing" height="100" width="100" className="h-full w-auto"/>
                
            </SwiperSlide>
            <SwiperSlide>
            <Image src="BusinessStandard.webp" alt="nothing" height="100" width="100" className="h-full w-auto"/>
                
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Featured