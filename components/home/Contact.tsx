import ContainerLayout from '@/layouts/ContainerLayout'
import Image from 'next/image'
import star from "@/app/assets/contact-star.svg"
import showreel from "@/app/assets/contact-showreel-text.svg"
import { Input } from '../ui/input'
import CustomButton from '../shared/CustomButton'
import { Textarea } from '../ui/textarea'

const Contact = () => {
  return (
    <div className='contact'>
      <ContainerLayout>
        <div className='flex gap-20'>
          <div className='flex flex-col gap-20'>
            <h2 className='contact-heading'>let’s <span className='text-primary'>talk</span></h2>
            <div className='space-y-20'>
              <Input className='w-full' placeholder="Enter Name" />
              <Input className='w-full' placeholder="Enter Email" />
              <Textarea placeholder="Type your message here." />
              <CustomButton text='Contact Us' color='primary'  />
            </div>
          </div>

          <div className='showreel-container'>
            <Image className='showreel-star' src={star} alt="car" width={100} height={100} />
            <Image className='showreel-text' src={showreel} alt="car" width={500} height={500} />
          </div>
        </div>
      </ContainerLayout>
    </div>
  )
}

export default Contact