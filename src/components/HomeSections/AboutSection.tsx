'use client'

import { FC } from 'react';
import LargeHeading from '../ui/LargeHeading';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '@/lib/motion';
import Image, { StaticImageData } from 'next/image';
import Paragraph from '../ui/Paragraph';
import { Button } from '../ui/Button';
import { downloadCv } from '@/lib/utils';

interface Service {
  title: string;
  icon: StaticImageData;
}

interface ServiceCardProps {
  index: number;
  title: string;
  icon: StaticImageData;
}

const ServiceCard: FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    transitionSpeed={2000}
    glareEnable={true}
    glareMaxOpacity={0.6}
    glareColor="#F2F2F2"
    glarePosition="bottom"
    scale={1.02} className='w-[200px] lg:w-[280px]'>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.7)}
      className='w-full p-[1px] rounded-[20px]'
    >
      <div
        className='green-pink-gradient rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >

        <Image src={icon} alt='web-development' height={64} width={64} />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About: FC = () => {
  return (
    <div className='py-[100px] flex w-full justify-center'>
      <div className='flex max-w-[967px] w-full justify-between'>
        <div className='w-[37%] flex flex-col gap-6'>
          <div className='p-1 flex w-full flex-col gap-8'>
            <div className='flex flex-col w-full gap-[20px]'>
              <div className='flex p-3 rounded-[200px] border border-solid border-[#D7D7D7] w-fit'>
                <div className='flex gap-2 items-center'>
                  <div className='py-2 px-6 bg-secondary flex justify-center items-center rounded-[100px] text-text font-raleway font-semibold text-xs max-w-[71px]'>About</div>
                  <Paragraph className='font-raleway text-base font-medium'>Get to know PraiseDev</Paragraph>
                </div>
              </div>

              <Paragraph className='font-dmSerifDisplay text-[40px] font-normal'>A new site for your agency? It’s here.</Paragraph>
            </div>

            <div></div>
          </div>
          learn more
        </div>
        <div className='w-[54%]'>Right</div>
      </div>
    </div>
  );
};

export default About;
