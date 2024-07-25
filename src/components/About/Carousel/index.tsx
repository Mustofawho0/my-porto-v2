'use client';
import Image from 'next/image';
import { image } from '@/contents/ImageCarousel';

function CarouselComponents() {
  return (
    <div className='flex gap-5'>
      {image.map((url) => (
        <>
          <div className='card card-compact w-36 min-w-fit h-fit flex items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer'>
            <div className='h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500'>
              <div className='flex justify-center flex-col items-center'>
                <div className='w-3/4'>
                  <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent'></div>
                </div>
                <figure
                  key={url.id}
                  className='h-[100px] w-[100px] mobile:w-[50px] mobile:h-[50px]'
                >
                  <Image
                    src={url.imageUrl}
                    alt='Shoes'
                    width={500}
                    height={500}
                    className='w-[80px] h-[80px] object-cover mt-4 rounded-lg mobile:w-[50px] mobile:h-[50px]'
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='text-white tracking-wide font-semibold mobile:text-xs'>
                    {url.name}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
export default CarouselComponents;
