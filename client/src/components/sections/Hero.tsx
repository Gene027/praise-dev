'use client'

import { FC, useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel';
import Slide from '../ui/HeroSlides';
import { slides } from '@/constants';
import { Loader2 } from 'lucide-react';

const Hero: FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className='h-[70vh] lg:h-[80vh] relative'>
        {isLoading ? (
          <div className='absolute w-full h-full flex justify-center items-center '>
            <Loader2 className='animate-spin infinite' />
          </div>
        ) : (
          <Carousel indicators={false} duration={2000} interval={10000} >
            {slides.map((slide) => (
              <Slide key={slide.title} image={slide.image} title={slide.title} image2={slide.image2} description={slide.description} />
            ))}
          </Carousel>
        )}
      </div>
    </>
  )
}

export default Hero