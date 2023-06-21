"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
const Steps = () => {
  return (
    <div className="pt-[25vw] pb-[25vw] md:pt-[15vw] md:pb-[20vw]  relative bg-sky-950 clippsmall px-[1rem] md:px-[3rem] lg:px-[5rem] xl:px-[10rem] 2xl:px-[12rem] ">
      <div className="text-center w-auto text-white flex flex-col items-center mt-[2vw] py-[2rem] mb-[5vw] my-12">
        <p className="text-2xl font-semibold">Start Earning in 3 Easy Steps</p>
        <p className="text-lg">We have create the app the make your earning easy</p>
      </div>
      <Swiper
        speed={1000}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 9500 }}
        modules={[Autoplay]}
      >
        <SwiperSlide >
          <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="p-[10vw] text-center md:text-left">
            <p className="text-lg font-semibold w-fit inline-block mb-[2vw] text-white py-3 pr-6 pl-4 bg-blue-500 rounded-sm clipt">STEP 1</p>
            <p className="text-2xl md:text-3xl text-sky-300 font-extrabold mb-[2vw] leading-10">Download the App and Sign up as a ZET agent</p>
            <div className="bg-sky-100 h-3 w-1/2 mb-6 rounded-xl inline-block">
              <div className="bg-blue-500 h-full rounded-xl animate"></div>
            </div>
            <div>
              <Image
                src="/playstore.svg"
                height="52"
                width="162"
                alt="no playstore"
                className="h-auto py-[0.5rem] px-[1rem] rounded-lg inline-block"
              />
            </div>
          </div>
          <div className="text-center h-[76vw] md:h-[36vw]">
            <video autoPlay muted loop src="/Step.mp4" className="h-full inline w-auto max-w-none rounded-3xl" />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex  flex-col-reverse md:flex-row items-center">
          <div className="p-[10vw]  text-center md:text-left">
            <p className="text-lg font-semibold w-fit mb-[2vw] inline-block text-white py-3 pr-6 pl-4 bg-blue-500 rounded-sm clipt">STEP 2</p>
            <p className=" text-2xl md:text-3xl text-sky-300 font-extrabold mb-[2vw] leading-10">Register your customers and Recommend financial products</p>
            <div className="bg-sky-100 h-3 w-1/2 mb-6 rounded-xl inline-block">
              <div className="bg-blue-500 h-full rounded-xl animate"></div>
            </div>
            <div>
              <Image
                src="/playstore.svg"
                height="52"
                width="162"
                alt="no playstore"
                className="h-auto py-[0.5rem] px-[1rem] rounded-lg inline-block"
              />
            </div>
          </div>
          <div className="text-center h-[76vw] md:h-[36vw]">
            <video autoPlay muted loop src="/Step.mp4" className="h-full inline w-auto max-w-none rounded-3xl" />
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="flex  flex-col-reverse md:flex-row items-center">
          <div className="p-[10vw]  text-center md:text-left">
            <p className="text-lg font-semibold w-fit mb-[2vw] inline-block text-white py-3 pr-6 pl-4 bg-blue-500 rounded-sm clipt">STEP 3</p>
            <p className=" text-2xl md:text-3xl text-sky-300 font-extrabold mb-[2vw] leading-10">Start earning upto ₹ 1 Lakh every month </p>
            <div className="bg-sky-100 h-3 w-1/2 mb-6 rounded-xl inline-block ">
              <div className="bg-blue-500 h-full rounded-xl animate"></div>
            </div>
            <div>
              <Image
                src="/playstore.svg"
                height="52"
                width="162"
                alt="no playstore"
                className="h-auto py-[0.5rem] px-[1rem] inline-block rounded-lg"
              />
            </div>
          </div>
          <div className="text-center h-[76vw] md:h-[36vw]">
            <video  autoPlay muted loop src="/Step.mp4" className="h-full inline w-auto max-w-none rounded-3xl" />
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Image
        src="/decorative.svg"
        height="652"
        width="378"
        alt="no playstore"
        className="absolute top-[22%] right-[9%]"
      />
    </div>
  );
};

export default Steps;
