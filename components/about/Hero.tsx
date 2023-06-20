import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='overflow-x-hidden'>
        <Image src="/ourmission.webp" alt="nothing" height="1300" width="2880" className='h-[40rem] sm:h-auto w-full object-cover' />
        <div className='absolute max-w-xl pt-[60%] sm:pt-0 top-[30%] md:top-[40%] xl:top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center text-white'>
            <h1 className='text-4xl font-bold'>OUR MISSION</h1>
            <div className='mt-2'>Enabling financial inclusion for the next billion Indians
                & making their Zindagi Set. Building a platform that enables you to sell
                financial products & earn up to Rs. 1 lakh every month
            </div>
            <div className='font-extrabold tracking-[0.2em] leading-10 mt-2'>
            EARN BETTER. LIVE BETTER.
            </div>

        </div>
    </div>
  )
}

export default Hero