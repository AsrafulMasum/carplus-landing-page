import React from 'react'
import ActiveLink from './ActiveLinks'
import { navItems } from '@/constants/navItems'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import CustomButton from '@/components/CustomButton'
import { ShoppingCart } from 'lucide-react'

const Navbar = () => {

  return (
    <nav  className="navbar"
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
  )
}

export default Navbar