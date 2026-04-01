import CustomButton from '@/components/shared/CustomButton'
import { Button } from '@/components/ui/button'
import { Home, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    
    <main className="min-h-screen flex items-center justify-center px-4"  style={{
        backgroundImage: "url('/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="w-full max-w-2xl">
        {/* Content Container */}
        <div className="text-center space-y-8">
          {/* 404 Error Code with Animation */}
          <div className="relative">
            <div className="text-9xl font-bold text-primary mb-4">
              404
            </div>
            <div className="absolute inset-0 text-9xl font-bold blur-3xl opacity-20 bg-linear-to-r from-orange-500 to-red-500" />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Page Not Found
            </h1>
            <p className="text-lg text-slate-300 max-w-md mx-auto leading-relaxed">
              Looks like your GPS took a wrong turn. The page you&apos;re looking for doesn&apos;t exist in our showroom.
            </p>
          </div>

          {/* Action Buttons */}
          <div className='flex justify-center items-center'>
            <Link href={'/'}>
              <CustomButton text='Go Back To Home Page' color='primary'  />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound