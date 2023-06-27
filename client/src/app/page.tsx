import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'

import type { Metadata } from 'next'
import { AboutSection, BestPortfolio, BlogNews, CallToAction, Hero, ServicesSection, Skills, Testimonial } from '@/components/sections'

export const metadata: Metadata = {
  title: 'PraiseDev | Home',
  description: 'This is my portfolio website',
  icons: {
    icon: '/logo.png'
  }
}

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <AboutSection/>
      <ServicesSection/>
      <BestPortfolio/>
      <Testimonial/>
      <CallToAction/>
      <Skills/>
      <BlogNews/>
      <div className="h-[600px]"></div>
    </div>
  )
}
