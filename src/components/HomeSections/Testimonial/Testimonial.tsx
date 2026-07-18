import { FC } from 'react'
import TitleTag from '../TitleTag';
import TestimonialCarousel from './TestimonialCarousel';

interface TestimonialProps {
  
}

const Testimonial: FC<TestimonialProps> = ({}) => {
  return (
    <section className="flex w-full justify-center bg-light px-4 py-[64px] sm:px-6 md:py-[100px] lg:px-8">
      <div className="flex w-full max-w-[1120px] flex-col items-center gap-10 md:gap-14">
        <TitleTag title="Testimonial" description="What people say" />
        <TestimonialCarousel />
      </div>
    </section>
  );
}

export default Testimonial
