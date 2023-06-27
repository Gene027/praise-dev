import { FC } from 'react'
import LargeHeading from './LargeHeading';
import Image from 'next/image';
import Paragraph from './Paragraph';
import { Button } from './Button';
import { useRouter } from 'next/navigation';
import AnimatedText from './AnimatedText';

interface SlideProps {
    title: string,
    image: string,
    image2: string,
    description: string,
}

const Slide: FC<SlideProps> = ({ title, image, image2, description }) => {

    const router = useRouter();
    return (
        <div className='bg-cover h-[70vh] lg:h-[80vh] w-full relative' style={{ backgroundImage: `url(${image})` }}>
            <div className='absolute flex flex-col justify-center lg:flex-row h-full w-full bg-black/80'>
                <div className='flex flex-1 justify-center lg:justify-start lg:items-center lg:ml-5 lg:mr-10'>
                    <div className='flex flex-col justify-center gap-5 items-center lg:items-start lg:justify-start max-w-sm lg:max-w-none'>
                        <div className='h-24'>
                            <AnimatedText text={title} />
                        </div>

                        <Paragraph className='text-slate-300 lg:text-start'>
                            {description}
                        </Paragraph>

                        <Button variant={"destructive"} size={"lg"} className='w-[150px] text-base animate-pulse'
                            onClick={() => router.push('/contact')} >
                            Get Started
                        </Button>
                    </div>
                </div>

                <div className='hidden lg:flex text-white justify-center items-center pr-10 pb-5'>
                    <Image src={image2} alt='3D image' height={400} width={400} quality={80} />
                </div>
            </div>
        </div>
    )
}


export default Slide;