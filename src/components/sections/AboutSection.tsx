'use client'

import { FC } from 'react';
import LargeHeading from '../ui/LargeHeading';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { services } from '@/constants';
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
    <>
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='px-5 lg:px-20'
      >
        <div className='mt-10 flex flex-wrap gap-5 justify-center'>
          {services.map((service: Service, index: number) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        <motion.div variants={textVariant()} >
          
            <LargeHeading size="sm" className='mt-10 tracking-wide text-primary'>
              Overview
            </LargeHeading>
          <Paragraph>
            Get to Know Me and My Expertise
          </Paragraph>
        </motion.div>

        <div className='flex gap-20 justify-between'>

          <Image src='/my-profile.jpg' alt='Official Picture' height={300} width={300} quality={100} className='aspect-square' />

          <motion.div
            variants={fadeIn('', '', 0.1, 1)}
            className='flex flex-col gap-5'
          >
            <Paragraph>
              <img src='/3-gold.png' alt='Years of experience' className='float-left mr-4 h-20 w-20' />
              Years of experience as a skilled software developer, my passion lies in creating innovative and efficient solutions that address the unique needs and goals of my clients. Through close collaboration and a deep understanding of their requirements, I strive to deliver exceptional results. My approach to software development is driven by a combination of technical proficiency and a strong emphasis on user experience. By leveraging my comprehensive skill set, I develop scalable and user-friendly solutions that effectively solve real-world problems. I believe that technology should enhance the lives of users and provide seamless experiences.
            </Paragraph>

            <Button variant='outline' size='lg' className='w-[150px]' onClick={downloadCv}>
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
