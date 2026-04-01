import { Star, Truck, Package } from 'lucide-react'
import CustomButton from '../shared/CustomButton'

const ProductDetails = () => {
  return (
    <div className="space-y-6 max-w-xl">
      {/* Limited Time Offer Badge */}
      <div className="text-orange-500 font-semibold text-sm tracking-wide">
        LIMITED TIME OFFER
      </div>

      {/* Product Title */}
      <h1 className="text-3xl xl:text-4xl font-bold text-gray-900">
        ROLLS-ROYCES CULLINAN 2023
      </h1>

      {/* Rating and SKU */}
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className="fill-orange-400 text-orange-400"
            />
          ))}
        </div>
        <span className="text-gray-600 text-sm">SKU: DN - 5850</span>
      </div>

      {/* Price Section */}
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <span className="text-gray-400 line-through text-lg">
            $ 200.00 USD
          </span>
          <span className="text-orange-500 text-2xl font-bold">
            $ 120.00 USD
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Tortor in id donec rutrum felis.
        Bibendum viverra nisl aliquam enim laoreet pellentesque at egestas
        lectus.
      </p>

      <div className='text-gray-500 space-y-2'>
        <p className='font-oswald tracking-wide'>Mileage : 18031km  |  Manual</p>
        <p className='font-oswald tracking-wide'>Engine : 3.0L V6</p>
        <p className='font-oswald tracking-wide'>Brand : Rolls Royce</p>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="my-10">
        <CustomButton text='ADD TO CART' color='primary'  />
      </div>

      {/* Delivery and Shipping Info */}
      <div className="space-y-3 pt-4 border-t border-gray-200">
        <div className="flex items-start gap-3">
          <Truck className="text-orange-500 mt-0.5" size={20} />
          <span className="text-gray-700">
            <span className="font-semibold">Estimate delivery :</span> Within
            5-7 days
          </span>
        </div>

        <div className="flex items-start gap-3">
          <Package className="text-orange-500 mt-0.5" size={20} />
          <span className="text-gray-700">
            <span className="font-semibold">Free shipping</span> on orders over
            $999 and aboves
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails