import { FC, useState } from 'react'
import Paragraph from './Paragraph';
import { Slide, slides } from '@/constants';
import Image from 'next/image';
interface CarouselProps {

}

const Carousel: FC<CarouselProps> = ({ }) => {
    const [newSlides, setSlides] = useState<Slide[]>(slides);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const [prevButtonPulse, setPrevButtonPulse] = useState(false)
    const [nextButtonPulse, setNextButtonPulse] = useState(false)

    function shuffleSlides(direction: 'next' | 'prev') {

        if (direction === 'next') {

            if (currentSlideIndex === 0) {
                const rotatedSlides = [slides[2], slides[0], slides[1]
                ];
                setSlides(rotatedSlides);
            }
            else {
                const rotatedSlides = [slides[1], slides[2], slides[0]
                ];
                setSlides(rotatedSlides);
            }

            setCurrentSlideIndex(prev => prev + 1);

        } else {
            if (currentSlideIndex === 1) {
                const rotatedSlides = [slides[0], slides[1], slides[2]
                ];
                setSlides(rotatedSlides);
            }
            else {
                const rotatedSlides = [slides[2], slides[0], slides[1]
                ];
                setSlides(rotatedSlides);
            }
            setCurrentSlideIndex(prev => prev - 1);
        }

    }


    const handleNext = () => {
        if (currentSlideIndex === 2) {
           setPrevButtonPulse(true)
           setTimeout(() => {
            setPrevButtonPulse(false)
           }, 1000);
            return
        }

        shuffleSlides('next')
    }
    const handlePrev = () => {
        if (currentSlideIndex === 0) {
           setNextButtonPulse(true)
           setTimeout(() => {
            setNextButtonPulse(false)
           }, 1000);
            return
        }
        shuffleSlides('prev')
    }

    return (<div className='flex flex-col w-full relative pb-24'>
        <div className='flex w-full gap-3'>
            <div className='flex-1 w-1/3 flex flex-col gap-4'  style={{ transition: 'transform 5s' }}>
                <Paragraph className='text-text font-dmSerifDisplay text-[28px] font-normal'>{newSlides[0].title}</Paragraph>
                <Image src={newSlides[0].image} width={193} height={196} alt={'Slide image 1'} />
            </div>

            <div className='flex-1 w-1/3 flex justify-center'  style={{ transition: 'transform 5s' }}>
                <Image src={newSlides[1].image} width={259} height={272} alt={'Slide image 2'} />
            </div>

            <div className='flex-1 w-1/3 flex justify-end'  style={{ transition: 'transform 5s' }}>
                <img className='h-[196px] w-[193px]' src={newSlides[2].image} alt="Slide image 3" />
            </div>
        </div>

        <div className='absolute w-full h-full flex justify-around items-center pt-40'>
            <Image onClick={handlePrev} className={`cursor-pointer ${prevButtonPulse && 'animate-ping'}`} height={66} width={66} alt='Carousel buttons' src={'/carousel-prev.png'} />
            <Image onClick={handleNext} className={`cursor-pointer ${nextButtonPulse && 'animate-ping'}`} height={66} width={66} alt='Carousel buttons' src={'/carousel-next.png'} />
        </div>
    </div>);
}

export default Carousel