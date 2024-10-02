'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react';

type SectionProps = {
  image: StaticImageData;
  title: string;
  desc: string;
  tag: string;
};

const Section = ({ image, title, desc, tag }: SectionProps) => {
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  return (
    <section
      className='relative h-screen overflow-hidden border-solid border-[80px] border-black sm:border-[20px]'
      ref={secRef}
    >
      <motion.div className='absolute h-[120%] w-full -z-10' style={{ top: y }}>
        <div className='absolute inset-0 bg-black/30 z-10'></div>
        <Image
          alt={title}
          src={image}
          fill
          className='object-cover object-center rounded-lg'
        />
      </motion.div>
      <div className='flex flex-col gap-4 p-24 mt-20 max-w-fit text-white sm:p-8'>
        <span className='uppercase text-xs drop-shadow-xl text-white'>
          {tag}
        </span>
        <h2 className='font-branding text-4xl drop-shadow-xl text-white'>
          {title}
        </h2>
        <p className='font-primary max-w-[50ch] drop-shadow-xl text-white'>
          {desc}
        </p>
      </div>
    </section>
  );
};

export default Section;
