'use client'

import { FC, useState, useEffect } from 'react'
import Paragraph from './Paragraph';
import { Slide, slides } from '@/constants';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CarouselProps {
  className?: string
}

const Carousel: FC<CarouselProps> = ({ className }) => {
    const [currentSlides, setCurrentSlides] = useState<Slide[]>(slides);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState<'next' | 'prev' | null>(null);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                handleNext();
            }
        }, 5000); // Auto-advance every 5 seconds

        return () => clearInterval(interval);
    }, [isAnimating]);

    const shuffleSlides = (dir: 'next' | 'prev') => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setDirection(dir);
        
        setTimeout(() => {
            let newSlides = [...currentSlides];
            
            if (dir === 'next') {
                // Move cards to the right: [1, 2, 0] -> [2, 0, 1] -> [0, 1, 2]
                newSlides = [currentSlides[2], currentSlides[0], currentSlides[1]];
                setCurrentIndex((prev) => (prev + 1) % slides.length);
            } else {
                // Move cards to the left: [1, 2, 0] -> [0, 1, 2] -> [2, 0, 1]  
                newSlides = [currentSlides[1], currentSlides[2], currentSlides[0]];
                setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
            }
            
            setCurrentSlides(newSlides);
            setDirection(null);
            setIsAnimating(false);
        }, 300);
    };

    const handleNext = () => {
        shuffleSlides('next');
    };

    const handlePrev = () => {
        shuffleSlides('prev');
    };

    const handleCardClick = (cardIndex: number) => {
        if (isAnimating) return;
        
        if (cardIndex === 0) {
            handlePrev();
        } else if (cardIndex === 2) {
            handleNext();
        }
        // Center card (index 1) doesn't trigger navigation
    };

    return (
        <div className={cn('flex flex-col w-full relative pb-16', className)}>
            {/* Mobile Layout (Three Cards with Right Half Visible) */}
            <div className="block lg:hidden">
                <div className="relative overflow-hidden">
                    <div className="flex gap-4 p-4 overflow-x-hidden">
                        {/* Left Card - Full Width */}
                        <div 
                            className={cn(
                                'flex-shrink-0 w-[280px] sm:w-[320px] cursor-pointer transition-all duration-500',
                                'opacity-80 hover:opacity-100',
                                isAnimating && direction === 'prev' && 'animate-card-shuffle scale-105'
                            )}
                            onClick={() => handleCardClick(0)}
                        >
                            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300">
                                <div className="p-3 bg-gradient-to-r from-primary/5 to-secondary/5">
                                    <Paragraph className='text-text font-dmSerifDisplay text-lg font-normal text-center'>
                                        {currentSlides[0].title}
                                    </Paragraph>
                                </div>
                                <div className="relative overflow-hidden">
                                    <Image 
                                        src={currentSlides[0].image} 
                                        width={320} 
                                        height={200} 
                                        alt={`${currentSlides[0].title} slide`}
                                        className="w-full h-[180px] sm:h-[200px] object-cover transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                                </div>
                            </div>
                        </div>

                        {/* Center Card (Featured) - Full Width */}
                        <div 
                            className={cn(
                                'flex-shrink-0 w-[280px] sm:w-[320px] transition-all duration-500',
                                isAnimating && 'animate-flip-in scale-105'
                            )}
                        >
                            <div className="relative overflow-hidden rounded-xl bg-white shadow-xl ring-2 ring-primary/30 transition-all duration-300">
                                {/* Featured Badge */}
                                <div className="absolute top-2 right-2 z-10 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                                    FEATURED
                                </div>
                                
                                <div className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10">
                                    <Paragraph className='text-text font-dmSerifDisplay text-lg font-normal text-center'>
                                        {currentSlides[1].title}
                                    </Paragraph>
                                </div>
                                
                                <div className="relative overflow-hidden">
                                    <Image 
                                        src={currentSlides[1].image} 
                                        width={320} 
                                        height={220} 
                                        alt={`${currentSlides[1].title} featured slide`}
                                        className="w-full h-[200px] sm:h-[220px] object-cover transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                                </div>
                                
                                <div className="p-3">
                                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Right Card - Half Visible */}
                        <div 
                            className={cn(
                                'flex-shrink-0 w-[140px] sm:w-[160px] cursor-pointer transition-all duration-500',
                                'opacity-80 hover:opacity-100',
                                isAnimating && direction === 'next' && 'animate-card-shuffle scale-105'
                            )}
                            onClick={() => handleCardClick(2)}
                        >
                            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300">
                                <div className="p-2 bg-gradient-to-r from-secondary/5 to-primary/5">
                                    <Paragraph className='text-text font-dmSerifDisplay text-sm font-normal text-center'>
                                        {currentSlides[2].title}
                                    </Paragraph>
                                </div>
                                <div className="relative overflow-hidden">
                                    <Image 
                                        src={currentSlides[2].image} 
                                        width={160} 
                                        height={140} 
                                        alt={`${currentSlides[2].title} slide`}
                                        className="w-full h-[120px] sm:h-[140px] object-cover transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout (Three Cards) */}
            <div className="hidden lg:block">
                <div className="relative overflow-hidden rounded-2xl">
                    <div className="flex w-full gap-6 p-6">
                        {/* Left Card */}
                        <div 
                            className={cn(
                                'flex-1 flex flex-col gap-4 cursor-pointer transition-all duration-500 transform hover:scale-105',
                                'opacity-70 hover:opacity-90',
                                isAnimating && direction === 'prev' && 'animate-card-shuffle scale-105',
                                'group perspective-1000'
                            )}
                            onClick={() => handleCardClick(0)}
                        >
                            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                <Paragraph className='text-text font-dmSerifDisplay text-2xl font-normal p-4 bg-gradient-to-r from-primary/5 to-secondary/5'>
                                    {currentSlides[0].title}
                                </Paragraph>
                                <div className="relative overflow-hidden">
                                    <Image 
                                        src={currentSlides[0].image} 
                                        width={193} 
                                        height={196} 
                                        alt={`${currentSlides[0].title} slide`}
                                        className="w-full h-[196px] object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </div>

                        {/* Center Card (Featured) */}
                        <div 
                            className={cn(
                                'flex-1 flex flex-col items-center gap-4 transition-all duration-500 transform',
                                isAnimating && 'animate-flip-in scale-110',
                                'group relative perspective-1000'
                            )}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                                {/* Featured Badge */}
                                <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    FEATURED
                                </div>
                                
                                <div className="relative overflow-hidden">
                                    <Image 
                                        src={currentSlides[1].image} 
                                        width={259} 
                                        height={272} 
                                        alt={`${currentSlides[1].title} featured slide`}
                                        className="w-full h-[272px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                                </div>
                                
                                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
                                    <Paragraph className='text-text font-dmSerifDisplay text-3xl font-normal text-center'>
                                        {currentSlides[1].title}
                                    </Paragraph>
                                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div 
                            className={cn(
                                'flex-1 flex flex-col items-end gap-4 cursor-pointer transition-all duration-500 transform hover:scale-105',
                                'opacity-70 hover:opacity-90',
                                isAnimating && direction === 'next' && 'animate-card-shuffle scale-105',
                                'group perspective-1000'
                            )}
                            onClick={() => handleCardClick(2)}
                        >
                            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                <Paragraph className='text-text font-dmSerifDisplay text-2xl font-normal p-4 bg-gradient-to-r from-secondary/5 to-primary/5'>
                                    {currentSlides[2].title}
                                </Paragraph>
                                <div className="relative overflow-hidden">
                                    <Image 
                                        src={currentSlides[2].image} 
                                        width={193} 
                                        height={196} 
                                        alt={`${currentSlides[2].title} slide`}
                                        className="w-full h-[196px] object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Navigation Buttons */}
            <div className='absolute inset-0 flex justify-between items-center pointer-events-none px-2 lg:px-4'>
                <button
                    onClick={handlePrev}
                    disabled={isAnimating}
                    className={cn(
                        'pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl',
                        'flex items-center justify-center transition-all duration-300 transform hover:scale-110',
                        'border-2 border-gray-200 hover:border-primary/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
                        'group'
                    )}
                    aria-label="Previous slide"
                >
                    <Image 
                        src='/carousel-prev.png' 
                        width={20} 
                        height={20} 
                        alt='Previous' 
                        className="lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110" 
                    />
                </button>

                <button
                    onClick={handleNext}
                    disabled={isAnimating}
                    className={cn(
                        'pointer-events-auto w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl',
                        'flex items-center justify-center transition-all duration-300 transform hover:scale-110',
                        'border-2 border-gray-200 hover:border-primary/50',
                        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
                        'group'
                    )}
                    aria-label="Next slide"
                >
                    <Image 
                        src='/carousel-next.png' 
                        width={20} 
                        height={20} 
                        alt='Next' 
                        className="lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110" 
                    />
                </button>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 lg:gap-3 mt-4 lg:mt-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (index !== currentIndex && !isAnimating) {
                                // Navigate to specific slide
                                const diff = index - currentIndex;
                                if (diff > 0) {
                                    for (let i = 0; i < diff; i++) {
                                        setTimeout(() => handleNext(), i * 300);
                                    }
                                } else {
                                    for (let i = 0; i < Math.abs(diff); i++) {
                                        setTimeout(() => handlePrev(), i * 300);
                                    }
                                }
                            }
                        }}
                        className={cn(
                            'w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300',
                            index === currentIndex 
                                ? 'bg-primary scale-125 shadow-lg' 
                                : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel