import type { Metadata } from 'next'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar'
import AboutUs from './components/about'
import MissionValues from './components/mission-values'
import OurTeam from './components/our-team'

export const metadata: Metadata = {
  title: 'PraiseDev | About Us',
  description: 'Digital dreams built',
  icons: {
    icon: '/logo.png'
  }
}

export default function About() {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <AboutUs/>
      <MissionValues/>
      <OurTeam/>
      <Footer/>
    </div>
  )
}
