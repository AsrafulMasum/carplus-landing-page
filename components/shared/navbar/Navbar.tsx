'use client';

import React, { useState } from 'react'
import ActiveLink from './ActiveLinks'
import { navItems } from '@/constants/navItems'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import CustomButton from '@/components/shared/CustomButton'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="navbar"
        style={{
        backgroundImage: "url('/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
        <div className='w-full h-24'>
          <div className="flex items-center justify-between">
                {/* logo */}
                <Link href="/" className="logo">
                  <Image src={logo} alt="logo" width={200} height={100}/>
                </Link>

                {/* navLinks */}
                <ul className="navLinks">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <ActiveLink href={item.href}>{item.name}</ActiveLink>
                    </li>
                  ))}
                </ul>

                {/* rightNav */}
                <div className="rightNav">
                  <Link href="#" className="lang-btn">
                    <ShoppingCart />
                  </Link>
                  <Link href="/login">
                    <CustomButton text="Book A Test Drive" color="transpent" />
                  </Link>
                </div>
              </div>
        </div>
    </nav>

    <nav className="xl:hidden w-full px-4">
      <div className='flex items-center justify-between'>
        {/* logo */}
        <Link href="/" className="logo">
          <Image src={logo} alt="logo" width={200} height={100}/>
        </Link>

        <Button
          onClick={() => setIsMenuOpen(true)}
          variant="ghost"
          size="sm"
          className="text-white rounded px-2"
        >
          {!isMenuOpen && <Menu size={32} />}
        </Button>
      </div>

      {
        isMenuOpen && 
        <div className="bg-black absolute top-0 left-0 w-full h-screen z-50 pl-12">
        {/* Close button */}
        <div className="flex justify-end p-4">
          <Button
            onClick={() => {
              setIsMenuOpen(false);
            }}
            variant={"ghost"}
            size={"icon"}
            className="bg-black rounded-none"
          >
            <X size={32} />
          </Button>
        </div>
        {/* Menu items */}
        <ul className="w-full flex flex-col justify-center gap-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <ActiveLink href={item.href} className='text-4xl'>{item.name}</ActiveLink>
            </li>
          ))}
        </ul>
      </div>
      }
    </nav>
    </div>
  )
}

export default Navbar