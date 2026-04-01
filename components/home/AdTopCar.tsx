import React from 'react'
import car from "@/app/assets/car-ad.webp"
import Image from 'next/image'
import CustomButton from '../shared/CustomButton'

const AdTopCar = () => {
  return (
    <section className="flex items-center justify-center py-40" style={{
      "backgroundImage": "linear-gradient(130deg, #c3d1e2, #ecedf0)"
    }}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
        {/* Car Image */}
        <div className="flex justify-center order-2 lg:order-1">
          <Image
            src={car}
            alt="White sports car"
            width={700}
            height={600}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
          {/* Label */}
          <div className="ad-sub-heading">
            Inquiry Made Easy
          </div>

          {/* Heading */}
          <h1 className="ad-heading">
            Start Your Pre-Owned Car Journey Here!
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-xl pb-12">
            Lorem ipsum dolor sit amet consectetur. Non lectus elit et nulla vitae ipsum magna tortor. Nec sem massa diam ornare ultrices ornare. Mauris iaculis feugiat sit.
          </p>

          {/* CTA Button */}
          <div>
            <CustomButton text='Explore More' color='primary' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdTopCar
