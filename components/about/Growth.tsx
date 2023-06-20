import Image from 'next/image'
import React from 'react'

const Growth = () => {
  return (
    <div className='text-center mt-12 pb-6'>
        <h1 className='text-2xl text-gray-700 sm:text-4xl font-bold'>How we evolved over the years</h1>
        <div className='overflow-x-scroll sm:overflow-auto w-full mt-20'>
            <Image src="Growth.webp" alt="growth" height="460" width="1872" className="max-w-[250%] sm:w-4/5 inline-block"/>
        </div>
    </div>
  )
}

export default Growth