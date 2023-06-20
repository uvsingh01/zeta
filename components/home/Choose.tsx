// @ts-nocheck
"use client"
import React,{useEffect} from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Choose = () => {
  useEffect(() => {
    AOS.init({

      duration : 500,
    });
  }, [])
  return (
    <div  className="flex flex-col md:flex-row w-auto items-center px-[1rem] py-[1rem]  sm:px-[2rem] md:py-[2rem] md:px-[3rem] lg:px-[5rem] lg:py-[2rem]  xl:px-[10rem] xl:py-[2rem] 2xl:px-[12rem] 2xl:py-[0.5rem] pt-[4vw] pb-[4vw]">
      <Image
        src="/bgImg.webp"
        height="641"
        width="223"
        alt="no playstore"
        className="hidden md:block absolute pl-[1.5vw] h-3/4 w-1/6"
      />
      <div className="my-12 flex-shrink-0  flex-col items-center ">
        <p className="text-2xl font-bold">
          Why{" "}<span className="text-blue-600">Choose Us</span>
        </p>
        <p className="text-lg">Why we are loved by our customers </p>
        <Image
          src="/whyUsHero.webp"
          height="374"
          width="277"
          alt="no playstore"
          className="h-full w-full mt-[3vw] hidden md:block relative z-2"
        />
      </div>
      <div data-aos="fade-up" className="grid text-center md:text-left w-full  px-[2vw] py-[1vw]  2xl:px-[3vw] 2xl:py-[2vw] gap-5 grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(300px,_1fr))]">
        <div className=" py-5 px-8 pt-[1.25rem] pb-[1.25rem]">
          <Image
            src="/investment.svg"
            height="128"
            width="128"
            alt="no playstore"
            className="inline w-[18vw] md:w-[6vw]"
          />
          <p className="text-xl font-semibold">Zero Investment</p>
          <p>Build your business without any investment</p>
        </div>
        <div className="py-5 px-8 pt-[1.25rem] pb-[1.25rem]">
          <Image
            src="/payout.svg"
            height="128"
            width="128"
            alt="no playstore"
            className="inline w-[18vw] md:w-[6vw]"
          />
          <p className="text-xl font-semibold">Quick Payout</p>
          <p>Direct Payout in your bank account in short time</p>
        </div>
        <div className="py-5 px-8 pt-[1.25rem] pb-[1.25rem]">
          <Image
            src="/earn.svg"
            height="128"
            width="128"
            alt="no playstore"
            className=" inline w-[18vw] md:w-[6vw]"
          />
          <p className="text-xl font-semibold">Limitless Earnings</p>
          <p>Direct Payout in your bank account in short time</p>
        </div>
        <div className="py-5 px-8 pt-[1.25rem] pb-[1.25rem]">
          <Image
            src="/upskill.svg"
            height="128"
            width="128"
            alt="no playstore"
            className="inline w-[18vw] md:w-[6vw]"
          />
          <p className="text-xl font-semibold">Training & Upskilling</p>
          <p>Get trained by finance and sales experts</p>
        </div>
        <div className="py-5 px-8 pt-[1.25rem] pb-[1.25rem]">
          <Image
            src="/support.svg"
            height="128"
            width="128"
            alt="no playstore"
            className="inline w-[18vw] md:w-[6vw]"
          />
          <p className="text-xl font-semibold">Customer Support</p>
          <p>Access tools and content to build relationship</p>
        </div>
        <div className="py-5 px-8 pt-[1.25rem] pb-[1.25rem]">
          <Image
            src="/finance.svg"
            height="128"
            width="128"
            alt="no playstore"
            className="inline w-[18vw] md:w-[6vw]"
          />
          <p className="text-xl font-semibold">Financial Products</p>
          <p>Trustworthy & high-rated products & categories</p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
