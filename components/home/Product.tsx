// @ts-nocheck
"use client"
import Image from "next/image";
import React,{useEffect} from "react";
import VanillaTilt from 'vanilla-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Product = () => {
    useEffect(() => {
        // @ts-ignore
        VanillaTilt.init();
        AOS.init({
          duration : 500,
        });
      }, []);
  return (
    <div className="relative pt-[2vw] pb-[8vw] py-[2rem] px-[1rem] sm:px-[3rem] lg:px-[5rem] xl:px-[10rem] 2xl:px-[12rem]  bg-gradient-to-b from-sky-100 to-white">
      <div className="my-6 text-center">
        <div className="text-2xl font-semibold">Products on ZET</div>
        <div className="text-lg text-gray-700 ">
          We are trusted by best brand in the country
        </div>
      </div>
      <div data-aos="fade-up" className="grid relative z-10 gap-[2vw] mt-[4vw] md:grid-cols-[repeat(auto-fit,minmax(300px,_1fr))] lg:grid-cols-[repeat(auto-fit,minmax(400px,_1fr))] xl:grid-cols-[repeat(auto-fit,minmax(500px,_1fr))] ">
        <div data-tilt data-tilt-scale="1.003" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
          <div  className="flex flex-col parent hover:bg-white sm:flex-row items-center p-[2rem] bg-green-100 rounded-xl ">
            <div className="contents">
              <Image
                src="/CC.webp"
                height="250"
                width="250"
                alt="no playstore"
                className="h-2/6 w-2/6 grayscale child "
              />
            </div>
            <div className="flex flex-col justify-center text-center ">
                <div className="text-xl font-semibold tracking-widest">CREDIT CARDS</div>
                <div className="text-gray-700">100% Contactless Application Process with Instant Approval From Top Banks.</div>
            </div>
          </div>
        </div>
        <div data-tilt data-tilt-scale="1.003" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
          <div className="flex flex-col parent hover:bg-white items-center sm:flex-row p-[2rem] bg-orange-100 rounded-xl ">
            <div className="contents">
              <Image
                src="/Loan.webp"
                height="250"
                width="250"
                alt="no playstore"
                className="h-2/6 w-2/6 grayscale child"
              />
            </div>
            <div className="flex flex-col justify-center text-center ">
                <div className="text-xl font-semibold tracking-widest">LOANS</div>
                <div className="text-gray-700">100% online process. Instant offers. Affordable Rate of Interest on loans.</div>
            </div>
          </div>
        </div>
        <div data-tilt data-tilt-scale="1.003" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
          <div className="flex flex-col parent  hover:bg-white items-center sm:flex-row p-[2rem] bg-rose-100 rounded-xl z-100">
            <div className="contents">
              <Image
                src="/BNPL.png"
                height="250"
                width="250"
                alt="no playstore"
                className="h-2/6 w-2/6 grayscale child"
              />
            </div>
            <div className="flex flex-col justify-center text-center ">
                <div className="text-xl font-semibold tracking-widest">BUY NOW PAY LATER</div>
                <div className="text-gray-700">Short-term financing that allows consumers to make purchases and pay for them over time.</div>
            </div>
          </div>
        </div>
        <div data-tilt data-tilt-scale="1.003" data-tilt-easing="cubic-bezier(0.03, 0.98, 0.52, 0.99)" data-tilt-max="8">
          <div className="flex flex-col parent  hover:bg-white items-center sm:flex-row p-[2rem] bg-amber-100 rounded-xl z-10">
            <div className="contents">
              <Image
                src="/AccountSave.webp"
                height="250"
                width="250"
                alt="no playstore"
                className="h-2/6 w-2/6 grayscale child"
              />
            </div>
            <div className="flex flex-col justify-center text-center ">
                <div className="text-xl font-semibold tracking-widest">SAVING ACCOUNTS</div>
                <div className="text-gray-700">ZET offers range of savings account that suits your personal needs for the banking.</div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/upper.svg"
        height="452"
        width="341"
        alt="no playstore"
        className="absolute z-0 top-0 left-0 "
      />
      <Image
        src="/lower.svg"
        height="452"
        width="386"
        alt="no playstore"
        className="absolute z-0 bottom-0 right-0"
      />
    </div>
  );
};

export default Product;
