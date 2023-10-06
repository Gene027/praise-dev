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

  return <div className='sticky flex px-2 lg:px-[100px] py-3'>
    <div className='flex w-full justify-between items-center'>
      <Link href='/'>
        <img src="/logo.png" alt="logo" className='w-[96px] h-[52px]' />
      </Link>
      <MobileMenu />

      <div className='hidden lg:flex gap-10'>
        {navLinks.map((link) => (<Link key={link.id} href={`/${link.id}`}><div className={`${path == link.id ? 'border-b-4 border-orange-400 text-text cursor-default' : 'hover:text-primary text-subText'} py-1 capitalize font-raleway text-base font-semibold`}>{link.title}</div></Link>))}
      </div>
      <Button variant="secondary" size="sm" className='hidden lg:flex border-text text-text font-raleway text-lg font-semibold'>Clients Portal</Button>
    </div>
  </div>
}

export default Navbar