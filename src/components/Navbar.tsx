'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks } from '@/constants'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const currentPath = pathname.split('/')[1]

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100' 
          : 'bg-white',
        className
      )} style={{ position: 'fixed' }}>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-3">
          <div className="flex w-full justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0 transition-transform hover:scale-105 duration-200"
              aria-label="PraiseDev Home"
            >
              <img 
                src="/logo.png" 
                alt="PraiseDev Logo" 
                className="w-[52px] h-[52px] object-contain"
                loading="eager"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = currentPath === link.id
                return (
                  <Link 
                    key={link.id} 
                    href={`/${link.id}`}
                    className="group relative"
                  >
                    <div className={cn(
                      'py-2 px-1 capitalize font-raleway text-base font-semibold transition-all duration-200',
                      isActive 
                        ? 'text-text cursor-default' 
                        : 'text-subText hover:text-primary'
                    )}>
                      {link.title}
                      {/* Active indicator */}
                      <div className={cn(
                        'absolute -bottom-1 left-0 h-1 bg-primary transition-all duration-300',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      )} />
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <HiX size={24} className="text-text" />
              ) : (
                <HiMenu size={24} className="text-text" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-[76px]" />

      {/* Mobile Menu Overlay */}
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300',
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-[300px] sm:w-[350px] bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden shadow-2xl',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="transition-transform hover:scale-105 duration-200"
          >
            <img
              src="/logo.png"
              alt="PraiseDev Logo"
              className="w-[44px] h-[44px] object-contain"
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Close menu"
          >
            <HiX size={20} className="text-text" />
          </button>
        </div>

        {/* Mobile Menu Navigation */}
        <nav className="flex flex-col pt-6">
          {navLinks.map((link, index) => {
            const isActive = currentPath === link.id
            return (
              <Link
                key={link.id}
                href={`/${link.id}`}
                onClick={handleLinkClick}
                className={cn(
                  'relative px-6 py-4 text-lg font-raleway font-medium transition-all duration-200 border-l-4',
                  isActive
                    ? 'text-primary bg-primary/5 border-primary'
                    : 'text-subText hover:text-primary hover:bg-gray-50 border-transparent hover:border-primary/30'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="capitalize">{link.title}</span>
                {isActive && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}

export default Navbar
