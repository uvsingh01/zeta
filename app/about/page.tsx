import Featured from '@/components/about/Featured'
import Founders from '@/components/about/Founders'
import Growth from '@/components/about/Growth'
import Hero from '@/components/about/Hero'
import HeroBottom from '@/components/about/HeroBottom'

import Investors from '@/components/about/Investors'
import React from 'react'

export default function about(){
  return (
    <>
    <Hero/>
    <Growth/>
    <Featured/>
    <Investors/>
    <Founders/>
    <HeroBottom/>
    </>
  )
}
