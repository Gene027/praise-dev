import type { Metadata } from 'next'
import { AboutSection, BestPortfolio, BlogNews, CallToAction, Hero, ServicesSection, Testimonial, HeroExt } from '@/components/HomeSections'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'PraiseDev | Home',
  description: 'Digital dreams built',
  icons: {
    icon: '/logo.png'
  }
}

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Hero/>
      <HeroExt/>
      <AboutSection/>
      <ServicesSection/>
      <BestPortfolio/>
      <Testimonial/>
      <BlogNews/>
      <CallToAction/>
      <Footer/>
    </div>
  )
}
