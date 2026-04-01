import React from 'react'
import Marquee from 'react-fast-marquee'
import star from "@/app/assets/star.svg"
import Image from 'next/image'

const MarqueeSlider = () => {
  return (
    <div className='marquee-slider'>
      <Marquee speed={100} gradient={false}>
        <div className='marquee-item'>
          <Image className='star'  src={star} alt="star" />
          <p className='marquee-text'>affordable luxuary</p>
        </div>
        <div className='marquee-item'>
          <Image className='star'  src={star} alt="star" />
          <p className='marquee-text'>Discounted Used Cars</p>
        </div>
        <div className='marquee-item'>
          <Image className='star'  src={star} alt="star" />
          <p className='marquee-text'>Premium Pre-Owned Cars</p>
        </div>
      </Marquee>
    </div>
  )
}

export default MarqueeSlider