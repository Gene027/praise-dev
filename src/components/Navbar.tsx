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

  return <div className='sticky flex justify-between items-center gap-1 pt-[44px] px-[100px]'>
    <Link href='/'>
      <img src="/logo.png" alt="logo" className='w-[96px] h-[52px]' />
    </Link>
    <MobileMenu />

    <div className='hidden lg:flex gap-10'>
      {navLinks.map((link) => (<Link key={link.id} href={`/${link.id}`}><Paragraph className={`${path == link.id ? 'border-b-4 border-orange-400 text-[#180401] cursor-default' : 'hover:text-primary text-[#505050]'} py-1 capitalize`}>{link.title}</Paragraph></Link>))}
    </div>
    <Button variant="secondary" size="sm" className='hidden lg:flex border-[#180401] text-[#180401] font-raleway'>Clients Portal</Button>
  </div>
}

export default Navbar