import type { Metadata } from 'next'
import { AboutSection, BestPortfolio, BlogNews, CallToAction, Hero, ServicesSection, Testimonial, HeroExt } from '@/components/HomeSections'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'PraiseDev | Home',
  description: 'Digital dreams built',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  }
}

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className='flex flex-col'>
        <Hero/>
        <HeroExt/>
        <AboutSection/>
        <ServicesSection/>
        <BestPortfolio/>
        <Testimonial/>
        <BlogNews/>
        <CallToAction/>
        <Footer/>
      </main>
    </>
  )
}
