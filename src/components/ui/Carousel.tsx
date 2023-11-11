import { FC, useState } from 'react'
import Paragraph from './Paragraph';
import { Slide, slides } from '@/constants';
import Image from 'next/image';
interface CarouselProps {

}

const Carousel: FC<CarouselProps> = ({ }) => {
    const [newSlides, setSlides] = useState<Slide[]>(slides);

    function shuffleSlides(direction: 'next' | 'prev'): Slide[] {
        const slides: Slide[] = newSlides;
        const numberOfSlides = slides.length;
        const currentIndex = slides.findIndex(slide => slide.title === 'E-Commerce'); // Assuming you start at the first slide

        let newIndex: number;

        if (direction === 'next') {
            newIndex = (currentIndex + 1) % numberOfSlides;
        } else if (direction === 'prev') {
            newIndex = (currentIndex - 1 + numberOfSlides) % numberOfSlides;
        } else {
            // Handle an invalid direction (optional)
            return slides;
        }

        const shuffledSlides = slides.map((slide, index) => {
            if (index === currentIndex) {
                return {
                    ...slide,
                    title: slides[newIndex].title,
                    image: slides[newIndex].image,
                };
            } else if (index === newIndex) {
                return {
                    ...slide,
                    title: slides[currentIndex].title,
                    image: slides[currentIndex].image,
                };
            }
            return slide;
        });

        setSlides(shuffledSlides);
        return shuffledSlides;
    }

    return (<div className='flex flex-col w-full'>
        <div className='flex w-full gap-3'>
            <div className='flex-1 w-1/3 flex flex-col gap-4'>
                <Paragraph className='text-text font-dmSerifDisplay text-[28px] font-normal'>{newSlides[0].title}</Paragraph>
                <Image src={newSlides[0].image} width={193} height={196} alt={'Slide image 1'} />
            </div>

            <div className='flex-1 w-1/3 flex justify-center'>
                <Image src={newSlides[1].image} width={259} height={272} alt={'Slide image 2'} />
            </div>

            <div className='flex-1 w-1/3 flex justify-end'>
                <img className='h-[196px] w-[193px]' src={newSlides[2].image} alt="Slide image 3" />
            </div>
        </div>

        <div>buttons</div>
    </div>);
}

export default Carousel