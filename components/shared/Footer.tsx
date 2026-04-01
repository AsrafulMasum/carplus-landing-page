import ContainerLayout from '@/layouts/ContainerLayout'
import { cn } from '@/lib/utils'
import { ArrowUpRight, Facebook, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
    const quickLinks = [
    { label: 'Home', href: '#', border: true },
    { label: 'About', href: '#', border: true },
    { label: 'Service', href: '#', border: true },
    { label: 'Blog', href: '#' },
  ]

  const supportLinks = [
    { label: 'Pricing', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Password protected', href: '#' },
    { label: '404 Not Found', href: '#' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-black text-white">
      <ContainerLayout>
        {/* Top border */}
      <div className="border-t border-gray-600"></div>

      {/* Main content */}
      <div className="grid grid-cols-3 gap-8 px-12 border-b border-gray-600">
        {/* Brand section */}
        <div className="space-y-8 border-r border-gray-600 p-8">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={200} height={200} />
          </div>
          <p className="text-gray-400 leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout .
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6 border-r border-gray-600 p-8">
          <h3 className="text-xl font-bold tracking-wide font-dmSans">QUICK LINKS</h3>
          <nav className="space-y-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "flex items-center justify-between group text-gray-300 hover:text-white transition-colors pb-3 border-gray-600", 
                  link.border && "border-b border-gray-600"
                )}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            ))}
          </nav>
        </div>

        <div className='flex justify-between p-8'>
          {/* Support */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold tracking-wide font-dmSans">SUPPORT</h3>
          <nav className="space-y-4">
            {supportLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Follow Us */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold tracking-wide font-dmSans">FOLLOW US</h3>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-12 py-6 flex justify-between items-center text-gray-400">
        <p>
          Designed by <span className="text-white font-semibold">HM MASUM</span>, powered by{' '}
          <span className="text-white font-semibold">NEXT.JS</span>
        </p>
        <div className="space-x-6">
          <a href="#" className="hover:text-white transition-colors">
            License
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">
            Style guide
          </a>
        </div>
      </div>
      </ContainerLayout>
    </footer>
  )
}

export default Footer