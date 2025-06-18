import { FC } from 'react'
import TitleTag from '../TitleTag';
import TestimonialCarousel from './TestimonialCarousel';

interface TestimonialProps {
  
}

const Testimonial: FC<TestimonialProps> = ({}) => {
  return (
    <div className="py-[60px] md:py-[100px] flex w-full items-center flex-col gap-10 md:gap-16 px-4 md:px-0">
      <TitleTag title="Testimonial" description="What people say" />
      <TestimonialCarousel />
    </div>
  );
}

export default Testimonial