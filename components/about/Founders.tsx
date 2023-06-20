//@ts-nocheck
"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Founders = () => {
  useEffect(() => {
    // @ts-ignore
    VanillaTilt.init();
    AOS.init({
      duration : 500,
    });
  }, []);
  return (
    <div className="bg-gradient-to-b from-sky-50 to-white pt-[2vw] pb-[8vw] px-[1rem] sm:px-[3rem] md:px-[5rem] lg:px-[10rem] xl:px-[12rem] py-[2rem] ">
      <div className="text-center">
        <p className="text-2xl md:text-4xl text-gray-700 font-extrabold leading-10">
          Meet our Founders
        </p>
        <p className="text-base md:text-2xl text-gray-500 mt-2">
          Few words from founders desk
        </p>
      </div>
      <div data-aos="fade-up" className="grid gap-[2vw] mt-[4vw] grid-cols-[repeat(auto-fit,minmax(100px,_1fr))] sm:grid-cols-[repeat(auto-fit,minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] lg:grid-cols-[repeat(auto-fit,minmax(200px,_1fr))]" >
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
          <div className="flex flex-col justify-center p-[2rem] rounded-xl">
            <div>
              <Image
                src="Manish.webp"
                alt="nothing"
                height="100"
                width="100"
                className="h-auto w-full"
              />
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="text-2xl text-gray-700 mt-4">Manish Shara</p>
                    <p className="text-xl text-gray-700 mt-1">Co-Founder & CEO</p>
                </div>
                <div>
                <Image
                src="LinkedInblack.webp"
                alt="nothing"
                height="100"
                width="100"
                className="h-10 w-10 mt-6"
              />
                </div>
            </div>
          </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
          <div className="flex flex-col justify-center p-[2rem] rounded-xl">
            <div>
              <Image
                src="Yash.webp"
                alt="nothing"
                height="100"
                width="100"
                className="h-auto w-full"
              />
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="text-2xl text-gray-700 mt-4">Yash Desai</p>
                    <p className="text-xl text-gray-700 mt-1">Co-Founder</p>
                </div>
                <div>
                <Image
                src="LinkedInblack.webp"
                alt="nothing"
                height="100"
                width="100"
                className="h-10 w-10 mt-6"
              />
                </div>
            </div>
          </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
          <div className="flex flex-col justify-center p-[2rem] rounded-xl">
            <div>
              <Image
                src="Lokesh.webp"
                alt="nothing"
                height="100"
                width="100"
                className="h-auto w-full"
              />
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="text-2xl text-gray-700 mt-4">Lokesh Agarwal</p>
                    <p className="text-xl text-gray-700 mt-1">CTO</p>
                </div>
                <div>
                <Image
                src="LinkedInblack.webp"
                alt="nothing"
                height="100"
                width="100"
                className="h-10 w-10 mt-6"
              />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
