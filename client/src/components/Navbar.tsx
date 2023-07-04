'use client'

import { FC } from 'react'
import MobileMenu from '@/components/MobileMenu'
import Link from 'next/link'
import { navLinks } from '@/constants'
import Paragraph from './ui/Paragraph'
import { usePathname } from 'next/navigation'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
  const path = usePathname();

  return <div className='sticky shadow-sm backdrop-blur-sm dark:bg-prussian-blue/75 top-0 left-0 w-full z-50 bg-white/75 h-14 border-b border-slate-300 dark:border-slate-700 flex justify-between items-center'>
    <Link href='/'>
      <img src="/logo.png" alt="logo" className='w-16 h-16 ml-5' />
    </Link>
    <MobileMenu />

    <div className='hidden lg:flex gap-5 mr-5'>
      {navLinks.map((link) => (<Link key={link.id} href={`/${link.id}`}><Paragraph className={`${path == link.id && 'text-primary'} hover:text-primary`}>{link.title}</Paragraph></Link>))}
    </div>
  </div>
}

export default Navbar