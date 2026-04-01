import ProductCarousel from "@/components/car-details/ProductCarousel"
import ProductDetails from "@/components/car-details/ProductDetails"
import { productImages } from "@/constants/navItems"
import ContainerLayout from "@/layouts/ContainerLayout"

const CarDetails = () => {
  return (
    <section className="car-details">
      <ContainerLayout>
        <div className="car-details-container">
          <div className='w-1/2 mt-20'>
            <ProductCarousel images={productImages} />
          </div>
          <div className='w-1/2 mt-20'>
            <ProductDetails />
          </div>
        </div>
      </ContainerLayout>
    </section>
  )
}

export default CarDetails