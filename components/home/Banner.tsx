import ContainerLayout from '@/layouts/ContainerLayout'
import React from 'react'
import CustomButton from '../CustomButton'

const Banner = () => {
  return (
    <div className='h-[calc(100vh-96px)] w-screen overflow-hidden' style={{
    backgroundImage: "url('/bg.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}>
      <ContainerLayout>
        <div className="banner">
          <div className='left-banner'>
            <div>
              <h2 className='heading'>PREMIUM</h2>
              <p className='text'>PRE-OWNED CAR</p>
            </div>
            <h4 className='sub-heading'>Upgrade Your Ride, Not Your Budget</h4>
            <CustomButton text='Explore More' color='primary' />
          </div>

          <div className='right-banner'>
            <video src="/showcase-video.mp4" autoPlay loop muted className="w-full h-full object-cover rounded-full"></video>
          </div>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default Banner