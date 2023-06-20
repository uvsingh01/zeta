//@ts-nocheck
"use client"
import Image from 'next/image'
import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      once:true,
      duration : 500,
    });
  }, [])
  return (
    <div data-aos="fade-up" className='py-8 px-4 sm:px-12 xl:px-44 '>
      <div className='flex mt-3 mb-3 md:mt-10 md:mb-7 lg:mt-20 lg:mb-14 bg-sky-100'>
        <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left p-[4vw] leading-[3rem]'>
            <h1 className='text-4xl mb-3 font-extrabold leading-[3rem]'>Become a Financial Advisor and <span className='text-blue-600'>Earn Rs. 1 Lakh/Month</span> </h1>
            <p className='mb-4 leading-[3rem]'>No investment required</p>
            <Image src="/playstore.svg" height="52" width="152" alt="no playstore" className='py-2 px-4 my-4 w-48 md:w-36 md:my-0 leading-[3rem]'/>

        </div>
        <div className='hidden md:block -mt-10 mr-9'>
            <img src="/happy.webp" height="701" width="738" alt="A happy man without good earning" className='h-auto w-[40vw] ' />
        </div>
      </div>
    </div>
  )
}

export default Hero
