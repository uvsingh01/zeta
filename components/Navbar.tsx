"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {usePathname } from 'next/navigation'
const Navbar = () => {
    const [show, setShow] = useState(false);
    const path = usePathname();

  return (
    <nav className="px-4 py-3 text-lg sm:px-24 md:px-20 xl:px-40 2xl:px-24 text-gray-500 flex justify-between items-center border-b border-gray-300 ">
      <Link href="/" className="">
        <Image src="/zet.svg" height="47" width="90" alt="ZET" />
      </Link>

      <div className="">
      <Image src="/menu.svg" height="36" width="36" alt="ZET" onClick={()=>setShow(true)} className={`${show?"hidden":""} md:hidden`} />
      <Image src="/close.svg" height="36" width="36" alt="ZET" onClick={()=>setShow(false)} className={`${show?"":"hidden"} md:hidden`} />

        <div className={`${show?"":"hidden"} md:hidden flex flex-col justify-center items-center absolute w-full inset-x-0 bg-white mt-4 pt-16`}>
        <Link href="/" className={`px-4 py-8 ${path==="/"? "text-blue-500":"text-gray-500"}`} >
          Home
        </Link>
        <Link href="/about" className={`px-4 py-8 ${path==="/about"? "text-blue-500":"text-gray-500"}`}>
          About Us
        </Link>
        <Link href="/" className={`px-4 py-8 ${path==="/partner-with-us"? "text-blue-500":"text-gray-500"}`}>
          Partner With Us
        </Link>
        <Link href="/" className={`px-4 py-8 ${path==="/blog"? "text-blue-500":"text-gray-500"}`}>
          Blog
        </Link>
        <Link href="/" className="px-4 py-8">
      <Image src="/playstore.svg" height="52" width="152" alt="ZET"  />
          
        </Link>
        </div>
      </div>

      <div className=" items-center hidden md:flex">
        <Link href="/" className={`px-4 ${path==="/"? "text-blue-500":"text-gray-500"}`} >
          Home
        </Link>
        <Link href="/about" className={`px-4 ${path==="/about"? "text-blue-500":"text-gray-500"}`}>
          About Us
        </Link>
        <Link href="/" className={`px-4 ${path==="/partner-with-us"? "text-blue-500":"text-gray-500"}`}>
          Partner With Us
        </Link>
        <Link href="/" className={`px-4 ${path==="/blog"? "text-blue-500":"text-gray-500"}`}>
          Blog
        </Link>
        <div className="px-4 m-2.5 text-base py-1 text-white bg-blue-600 rounded-lg">
          <button>Download ZET</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
