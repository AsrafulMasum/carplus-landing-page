'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

interface ProductCarouselProps {
  images: ProductImage[];
}

const ProductCarousel = ({ images }: ProductCarouselProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]?.id);

  const currentImage = images.find((img) => img.id === selectedImage);

  return (
    <div className="flex gap-6 p-8">
      {/* Thumbnail Gallery */}
      <div className="flex flex-col gap-4">
        {images?.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image.id)}
            className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === image.id
                ? 'border-primary bg-primary/10'
                : 'border-gray-200 bg-gray-100 hover:border-gray-300'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain p-2"
            />
          </button>
        ))}
      </div>

      {/* Main Image Display */}
      <div className="flex-1 flex items-center justify-center rounded-lg min-h-96">
        {currentImage && (
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={700}
            height={700}
            className="object-cover rounded-lg h-[650px] w-full"
          />
        )}
      </div>
    </div>
  );
}

export default ProductCarousel