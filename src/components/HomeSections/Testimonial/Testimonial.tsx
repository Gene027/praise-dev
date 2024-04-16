import { FC } from 'react'
import TitleTag from '../TitleTag';
import TestimonialCarousel from './TestimonialCarousel';

interface TestimonialProps {
  
}

const Testimonial: FC<TestimonialProps> = ({}) => {
  return (
    <div className="py-[100px] flex w-full items-center flex-col gap-16">
      <TitleTag title="Testimonial" description="What people say" />
      <TestimonialCarousel />
    </div>
  );
}

export default Testimonial