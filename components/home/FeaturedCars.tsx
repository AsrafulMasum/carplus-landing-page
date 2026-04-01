import ContainerLayout from '@/layouts/ContainerLayout'
import React from 'react'
import CustomCard from '../shared/CustomCard'

const FeaturedCars = () => {
  return (
    <div className='featured'>
      <ContainerLayout>
        <div>
          <div className='flex flex-col justify-center items-center'>
            <p className='featured-sub-heading'>Recommended For You</p>
            <h1 className='featured-heading'>Our Exquisite Collection of Premium Cars</h1>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <CustomCard image='image1' />
            <CustomCard image='image2' />
            <CustomCard image='image1'/>
            <CustomCard image='image2' />
            <CustomCard image='image1' />
            <CustomCard image='image2' />
          </div>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default FeaturedCars