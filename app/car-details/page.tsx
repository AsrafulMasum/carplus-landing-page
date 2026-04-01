import InformationTabs from "@/components/car-details/InformationTabs"
import ProductCarousel from "@/components/car-details/ProductCarousel"
import ProductDetails from "@/components/car-details/ProductDetails"
import { productImages } from "@/constants/navItems"
import ContainerLayout from "@/layouts/ContainerLayout"

const CarDetails = () => {
  return (
    <section className="car-details">
      <ContainerLayout>
        <div>
          <div className="car-details-container">
            <div className='xl:w-1/2'>
              <ProductCarousel images={productImages} />
            </div>
            <div className='xl:w-1/2'>
              <ProductDetails />
            </div>
          </div>

          <InformationTabs />
        </div>
      </ContainerLayout>
    </section>
  )
}

export default CarDetails