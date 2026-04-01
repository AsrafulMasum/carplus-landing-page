import ContainerLayout from '@/layouts/ContainerLayout'
import Image from 'next/image'
import stroke from '@/app/assets/about-section-stroke.svg'
import car from "@/app/assets/car.webp"
import inside from "@/app/assets/inside-car.webp"
import carIcon from "@/app/assets/car-icon.svg"
import cargoIcon from "@/app/assets/cargo-icon.svg"
import CustomButton from '../CustomButton'

const AboutSection = () => {
  return (
    <div className='about-section'>
      <Image className='stroke-img' src={stroke} alt="stroke" width={800} height={800} />
      <ContainerLayout>
        <div className='about-container'>
          <div className='about-content-left'>
            <p className='about-sub-heading'>WHO WE ARE</p>
            <h1 className='about-heading'>About <span>carplus</span></h1>
            <div className='about-img-left-container'>
              <div className='hidden xl:block absolute top-14 -left-12 h-[620px]! w-[580px]! bg-bg-gray z-0!'></div>
              <Image className='about-img-left' src={car} alt="car" width={500} height={600} />
            </div>
          </div>

          <div className='about-content-right'>
            <div className='about-img-right-container'>
              <Image className='inside-img' src={inside} alt="car" width={500} height={500} />
            </div>
            <p className='about-text'>Lorem ipsum dolor sit amet consectetur. Non lectus elit et nulla vitae ipsum magna tortor. Nec sem massa diam ornare ultrices ornare. Mauris iaculis feugiat sit elit convallis faucibus. Lorem at tortor felis amet dolor. Amet bibendum in tincidunt arcu.</p>
            <div className='flex justify-between items-center gap-10 pb-4'>
              <div className='icon-container'>
                <Image className='icon' src={carIcon} alt="stroke" width={100} height={100} />
                <p className='icon-heading'>Luxury Limousine Selection</p>
              </div>
              <div className='h-full w-px bg-black' />
              <div className='icon-container'>
                <Image className='icon' src={cargoIcon} alt="stroke" width={100} height={100} />
                <p className='icon-heading'>Fast Car Delivery Service</p>
              </div>
            </div>
            <CustomButton text='Explore More' color='primary' />
          </div>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default AboutSection