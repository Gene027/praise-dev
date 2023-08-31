'use client'

import { FC } from 'react'
import MobileMenu from '@/components/MobileMenu'
import Link from 'next/link'
import { navLinks } from '@/constants'
import Paragraph from './ui/Paragraph'
import { usePathname } from 'next/navigation'
import { Button } from './ui/Button'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
  const path = usePathname().split('/')[1];

  return <div className='sticky flex justify-between items-center pt-[44px] px-[100px]'>
    <Link href='/'>
      <img src="/logo.png" alt="logo" className='w-[96px] h-[52px]' />
    </Link>
    <MobileMenu />

    <div className='hidden lg:flex gap-10'>
      {navLinks.map((link) => (<Link key={link.id} href={`/${link.id}`}><Paragraph className={`${path == link.id && 'border-b-4 border-orange-400'} hover:text-primary py-1`}>{link.title}</Paragraph></Link>))}
    </div>
   <Button variant="secondary">Clients Portal</Button>
  </div>
}

export default Navbar