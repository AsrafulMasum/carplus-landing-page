
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import car from "@/app/assets/car-for-card.webp"
import car2 from "@/app/assets/car-for-card-2.webp"
import CustomButton from './CustomButton'

const CustomCard = ({image}: {image: string}) => {
  return (
    <Card className="relative mx-auto w-full pt-0 p-8">
      <CardAction className='flex justify-between items-center w-full'>
        <CardTitle className='text-xl font-medium font-boldonse'>2023 INFINITI QX80</CardTitle>
        <Badge variant="outline" className='uppercase tracking-widest text-sm'>SALE</Badge>
      </CardAction>
      <p className='text-gray-600 tracking-widest'>Mileage: 18031km  |  Manual</p>
      <Image
        src={image === "image1" ? car : car2}
        alt="Event cover"
        className="w-full object-cover p-4"
      />
      <CardHeader>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter className='flex justify-between items-center w-full'>
        <h6 className='text-2xl font-medium text-primary font-oswald'>$ 40,000</h6>
        <CustomButton text='View Details' color='primary' />
      </CardFooter>
    </Card>
  )
}

export default CustomCard