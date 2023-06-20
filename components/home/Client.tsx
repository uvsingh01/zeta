"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
const Client = () => {
  return (
    <section className="py-8 px-4 sm:px-12 lg:px-20">
      <div className="text-center my-6">
        <p className="text-2xl font-semibold">Top Brands on ZET</p>
        <p className="text-lg text-gray-700 ">
          We are trusted by best brand in the country
        </p>
      </div>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        speed={3000}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="py-3 border rounded-lg flex justify-center">
            <Image
              src="/Amex.webp"
              height="52"
              width="152"
              alt="no playstore"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 border rounded-lg flex justify-center" >
            <Image
              src="/Axis.webp"
              height="52"
              width="152"
              alt="no playstore"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 border rounded-lg flex justify-center" >
            <Image
              src="/Bajaj.webp"
              height="52"
              width="152"
              alt="no playstore"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 border rounded-lg flex justify-center" >
            <Image
              src="/BOB.webp"
              height="52"
              width="152"
              alt="no playstore"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 border rounded-lg flex justify-center" >
            <Image
              src="/Icici.webp"
              height="52"
              width="152"
              alt="no playstore"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 border rounded-lg flex justify-center" >
            <Image
              src="/Idfc.webp"
              height="52"
              width="152"
              alt="no playstore"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 border rounded-lg flex justify-center" >
            <Image
              src="/YesBank.webp"
              height="52"
              width="152"
              alt="no playstore"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 border rounded-lg flex justify-center" >
            <Image
              src="/StandardChartered.webp"
              height="52"
              width="152"
              alt="no playstore"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 border rounded-lg flex justify-center" >
            <Image
              src="/Aufin.png"
              height="52"
              width="152"
              alt="no playstore"
              className=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-3 border rounded-lg flex justify-center" >
            <Image
              src="/IndusInd.webp"
              height="52"
              width="152"
              alt="no playstore"
              className=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Client;
