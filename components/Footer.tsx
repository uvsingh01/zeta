import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-full text-white ">
      <Image
        src="footer.webp"
        height="532"
        width="1440"
        alt="footer"
        className="absolute w-full h-1/2 md:h-2/3 object-cover"
      />
      <div className="relative text-center py-[2rem] px-[1rem] sm:px-[3rem] lg:px-[5rem] xl:px-[10rem]">
        <div className="flex flex-col ">
          <div className="flex flex-col pl-5 py-5 md:py-5 border-b ">
            <Image
              src="zetwhite.svg"
              height="100"
              width="100"
              alt="footer"
              className="h-[12vw] md:h-[4vw] -mx-5"
            />
          </div>
          <div className="w-full mt-[3vw]">
            <div className="flex justify-between flex-wrap md:px-5">
              <div className="flex flex-col items-start">
                <p className="mb-4 text-xs md:text-lg" >COMPANY</p>
                <Link className="mb-3 text-[10px] md:text-base" href="/about">About Us </Link>
                <Link className="mb-3 text-[10px] md:text-base" href="/partner-with-us">Partner with us </Link>
                <Link className="mb-3 text-[10px] md:text-base" href="/blog">Blog </Link>
              </div>
              <div  className="flex flex-col items-start">
                <p className="mb-4 text-xs md:text-lg">LEGAL</p>
                <Link className="mb-3 text-[10px] md:text-base" href="/privacy-policy">Prrivacy Policy </Link>
                <Link className="mb-3 text-[10px] md:text-base" href="/terms-of-use">Terms of Use </Link>
              </div>
              <div  className="flex flex-col items-start">
                <p className="mb-4 text-xs  md:text-lg">CONTACT</p>
                <Link className="mb-3 text-[10px] md:text-base flex" href="/" >
                  <Image src="mail.webp" height="24" width="30" alt="nothing" className="pr-2" />
                  hi@zetapp.in
                </Link>
                <Link className="mb-3 text-[10px] md:text-base flex" href="/" >
                <Image src="phone.webp" height="24" width="30" alt="nothing" className="pr-2" />
                  +91-74172740072 </Link>
              </div>
              <div className="flex flex-col items-start">
                <p className="mb-4 text-xs md:text-lg">SOCIAL</p>
                <div className="flex">
                <Link href="/" >
                <Image src="linkedin.svg" height="32" width="32" alt="nothing" />
                </Link>
                <Link href="/" >
                <Image src="instagram.svg" height="32" width="32" alt="nothing" />
                </Link>
                <Link href="/" >
                <Image src="facebook.svg" height="32" width="32" alt="nothing" />
                </Link>
                <Link href="/" >
                <Image src="telegram.svg" height="32" width="32" alt="nothing" />
                </Link>
                <Link href="/" >
                <Image src="whatsapp.svg" height="32" width="32" alt="nothing" />
                </Link>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
