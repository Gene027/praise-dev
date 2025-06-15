'use client'

import { useState, useEffect, ReactNode } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { createPortal } from 'react-dom'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuContent = (
    <div>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 9998 }}
        onClick={toggleMenu}
      />

      {/* Sliding Menu Panel */}
      <div
        className={`fixed top-0 left-0 w-[280px] h-full bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Logo Section */}
        <div className="p-4 border-b border-gray-100">
          <img src="/logo.png" alt="logo" className="w-12 h-12" />
        </div>

        {/* Navigation Links */}
        <nav className="py-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/${link.id}`}
              className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
              onClick={toggleMenu}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )

  return (
    <div className="lg:hidden">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        style={{ zIndex: 9999, position: 'relative' }}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {mounted && createPortal(menuContent, document.body)}
    </div>
  )
}

export default MobileMenu
