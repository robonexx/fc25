'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/animations/Animations';
import CTA from './CTA';
import WordSpinner from '../WordSpinner';
/* import IMG from '@/assets/images/hero.jpg'; */

const Spinner = () => {
  const words = ['Foundation', 'Culture', 'History', 'Purpose'];
  return (
    <div className='lg:mt-40 mt-10 text-3xl xl:text-7xl md:text-5xl p-4 rounded-md transition-all duration-500 ease-in-out'>
      <div className='w-full flex flex-col justify-center items-center'>
        <h2 className='text-aubergine-500 font-branding drop-shadow-md text-white whitespace-nowrap text-center'>
          The artform of locking
        </h2>
        <div className='pl-3 sticky drop-shadow-md'>
          <WordSpinner words={words} />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [contentVisible, setContentVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handlePlay = () => {
        setContentVisible(false);
      };

      const handlePause = () => {
        setContentVisible(true);
      };

      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);

      return () => {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  return (
    <motion.section
      className='relative h-[100vh] flex flex-col justify-center'
      variants={fadeIn}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <div className='absolute inset-0 -z-10 pointer-events-auto'>
        <div className='absolute inset-0 bg-black/60 z-10 pointer-events-none'></div>
        <video
          className='h-screen pointer-events-auto cursor-pointer'
          ref={videoRef}
          autoPlay
          loop
          controls
          src='/videos/club.mp4'
        ></video>
        {/*  <Image
          alt='funkcamp'
          src={IMG}
          fill
          className='object-cover object-center rounded-lg pointer-events-none max-h-screen'
        /> */}
      </div>
      {/* when pushing play this part under should be opacity 0 fix */}
      {contentVisible && (
        <div
          className={`w-screen h-screen z-50 grid place-content-center py-20 transition-opacity duration-500 pointer-events-none`}
        >
          <motion.h1
            variants={fadeIn}
            initial='initial'
            animate='enter'
            exit='exit'
            className={`text-center pt-20 lg:top-20 lg:w-full text-2xl md:text-5xl lg:text-7xl z-10 text-white lg:mt-20 mt-6 mb-4 font-branding p-4 rounded-md duration-500 pointer-events-none`}
          >
            Funkcamp 2025 - 20 years Anniversary
          </motion.h1>
          <Spinner />
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='w-full max-h-fit text-sm md:text-xl text-center leading-loose text-slate-200 drop-shadow-xl z-10 relative font-primary rounded-md transition-opacity duration-500 pointer-events-none p-4'
          >
            Swedens first locking camp, bringing the pioneers to share with the
            locking community
          </motion.p>
          <motion.div
            className='pointer-events-auto'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <CTA />
          </motion.div>
        </div>
      )}
      {!contentVisible && (
        <>
          <div className='absolute top-32 left-8 text-xl font-branding  drop-shadow-xl transition-opacity duration-500 pointer-events-none text-gray-500'>
            <h2>Royal Nelson Orchesta at Fasching</h2>
          </div>
          <div className='absolute bottom-20 right-8 text-2xl font-semibold font-branding  drop-shadow-xl transition-opacity duration-500 pointer-events-none text-gray-400'>
            <h2>The Gogo Brothers & Willow</h2>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Hero;
