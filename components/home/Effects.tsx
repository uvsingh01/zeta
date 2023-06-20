"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";
const Effects = () => {
  return (
    <div className="pt-[10vw] pb-[10vw]  py-[2rem] px-[1rem] sm:px-[3rem] md: lg:px-[5rem] xl:px-[10rem] bg-blue-800 clipo text-white">
      <div className=" md:flex pt-[20vw] md:pt-[10vw] pb-[10vw] clipi bg-blue-600">
        <div className="md:w-1/3 lg:w-1/2">
        <Image
                src="/peeps.webp"
                height="250"
                width="250"
                alt="no playstore"
                className="h-full w-full hidden md:block mix-blend-luminosity "
              />
        </div>
        <div className="p-[4vw] block md:w-2/3 md:-ml-[6vw] overflow-hidden ">
          <p className="text-xs sm:text-sm md:text-xl font-extrabold tracking-widest mb-[1vw]">THE ZET EFFECT</p>
          <Swiper
        speed={1000}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay,Pagination]}
        pagination={{type: 'progressbar'}}
      >
        <SwiperSlide>
             <div className="pr-4 py-4 text-lg  sm:text-2xl md:text-4xl font-extrabold leading-8"> More than ₹20 Cr earned by our Agents by selling Credit Cards and
              Loans</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pr-4 py-4 text-lg  sm:text-2xl md:text-4xl font-extrabold leading-8">14 Lakh+ Financial Advisor across India are using ZET to increase
              their income.</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pr-4 py-4 text-lg  sm:text-2xl md:text-4xl font-extrabold leading-8">We helped customers in more than 50 cities to get their first
              financial product
              </div>
            </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Effects;
