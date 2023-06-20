// @ts-nocheck
"use client"
import React,{useEffect} from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import VanillaTilt from "vanilla-tilt";

const Investors = () => {
  useEffect(() => {
    // @ts-ignore
    VanillaTilt.init();
    AOS.init({
      duration : 500,
    });
  }, []);
  return (
    <div className="pt-[2vw] pb-[8vw] px-[1rem] sm:px-[3rem] md:px-[5rem] lg:px-[10rem] xl:px-[12rem] py-[2rem]">
      <p className="text-2xl md:text-4xl text-gray-700 font-extrabold leading-10">
        Meet the Investors
      </p>
      <div data-aos="fade-up" className="grid gap-[2vw] mt-[4vw] grid-cols-[repeat(auto-fit,minmax(100px,_1fr))] sm:grid-cols-[repeat(auto-fit,minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,_1fr))]">
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
          <div className=" md:p-[2rem] rounded-xl">
            <Image
              src="InvCompany1.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-full w-auto"
            />
          </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
          <div className="md:p-[2rem] rounded-xl">
            <Image
              src="InvCompany2.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-full w-auto"
            />
          </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
          <div className="md:p-[2rem] rounded-xl">
            <Image
              src="InvCompany3.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-full w-auto"
            />
          </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
          <div className="md:p-[2rem] rounded-xl">
            <Image
              src="InvCompany4.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-full w-auto"
            />
          </div>
        </div>
      </div>
      <div className="grid gap-[2vw] mt-[4vw] grid-cols-[repeat(auto-fit,minmax(100px,_1fr))] sm:grid-cols-[repeat(auto-fit,minmax(150px,_1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,_1fr))]">
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
            <div className="flex flex-col justify-center p-[1rem] md:p-[2rem] rounded-xl">
            <Image
              src="Inv1.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-auto w-full"
            />
            <p className="text-sm md:text-lg text-gray-700 mt-4 font-medium ">Kunal Shah</p>
            <p className="text-[10px] md:text-base text-gray-500">Founder, CRED</p>
            </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
            <div className="flex flex-col justify-center p-[1rem] md:p-[2rem] rounded-xl">
            <Image
              src="Inv2.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-auto w-full"
            />
            <p className="text-sm md:text-lg text-gray-700 mt-4 font-medium ">Gaurav Munjal</p>
            <p className="text-[10px] md:text-base text-gray-500">Founder, UNACADEMY</p>
            </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
            <div className="flex flex-col justify-center p-[1rem] md:p-[2rem] rounded-xl">
            <Image
              src="Inv3.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-auto w-full"
            />
            <p className="text-sm md:text-lg text-gray-700 mt-4 font-medium ">Aakrit Vaish</p>
            <p className="text-[10px] md:text-base text-gray-500">Founder, HAPTIK</p>
            </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
            <div className="flex flex-col justify-center p-[1rem] md:p-[2rem] rounded-xl">
            <Image
              src="Inv4.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-auto w-full"
            />
            <p className="text-sm md:text-lg text-gray-700 mt-4 font-medium ">Harshil Mathur</p>
            <p className="text-[10px] md:text-base text-gray-500">Founder, RAZORPAY</p>
            </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
            <div className="flex flex-col justify-center p-[1rem] md:p-[2rem] rounded-xl">
            <Image
              src="Inv5.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-auto w-full"
            />
            <p className="text-sm md:text-lg text-gray-700 mt-4 font-medium ">Vidit Aatrey</p>
            <p className="text-[10px] md:text-base text-gray-500">Founder & CEO, MEESHO</p>
            </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
            <div className="flex flex-col justify-center p-[1rem] md:p-[2rem] rounded-xl">
            <Image
              src="Inv6.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-auto w-full"
            />
            <p className="text-sm md:text-lg text-gray-700 mt-4 font-medium ">Amrish Rau</p>
            <p className="text-[10px] md:text-base text-gray-500">CEO, PINELABS</p>
            </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
            <div className="flex flex-col justify-center p-[1rem] md:p-[2rem] rounded-xl">
            <Image
              src="Inv7.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-auto w-full"
            />
            <p className="text-sm md:text-lg text-gray-700 mt-4 font-medium ">Lalit Keshre</p>
            <p className="text-[10px] md:text-base text-gray-500">CEO, GROWW</p>
            </div>
        </div>
        <div data-tilt data-tilt-scale="1.03" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
            <div className="flex flex-col justify-center p-[1rem] md:p-[2rem] rounded-xl">
            <Image
              src="Inv8.webp"
              alt="nothing"
              height="100"
              width="100"
              className="h-auto w-full"
            />
            <p className="text-sm md:text-lg text-gray-700 mt-4 font-medium ">Gokul Rajaram</p>
            <p className="text-[10px] md:text-base text-gray-500">Product, DOORDASH</p>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Investors;
