'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/components/animations/Animations';
import CTA from './CTA';
import WordSpinner from '../WordSpinner';
import videoSrc from '../../assets/videos/club.mp4';

const Spinner = () => {
  const words = ['Foundation', 'Culture', 'History', 'Purpose'];
  return (
    <div className='text-2xl mx-auto w-fit xl:text-7xl md:text-5xl inline p-4 rounded-md transition-all duration-500 ease-in-out hover:scale-125'>
      <div className='w-full mx-auto'>
        <h2 className='text-aubergine-500 font-branding float-left drop-shadow-md text-white'>
          The artform of locking
        </h2>
        <div className='pl-3 sticky float-left w-fit drop-shadow-md'>
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
      className='relative h-[100dvh] flex flex-col justify-center m-0'
      variants={fadeIn}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <div className='absolute inset-0 -z-10 pointer-events-auto'>
        <div className='absolute inset-0 bg-black/50 z-10 pointer-events-none'></div>
        <video
          className='w-full h-full object-cover pointer-events-auto cursor-pointer'
          ref={videoRef}
          autoPlay
          loop
          controls
          src={videoSrc}
        ></video>
      </div>
      {/* when pushing play this part under should be opacity 0 fix */}
      {contentVisible && (
        <div
          className={`absolute w-full h-full top-0 left-0 z-50 grid place-content-center py-20 transition-opacity duration-500 pointer-events-none`}
        >
          <motion.h1
            variants={fadeIn}
            initial='initial'
            animate='enter'
            exit='exit'
            className={`sm:absolute sm:top-8 sm:left-8 lg:text-center lg:w-full text-2xl md:text-5xl lg:text-7xl z-10 text-white mt-20 mb-8 font-branding p-4 rounded-md duration-500 pointer-events-none`}
          >
            Funkcamp 2025 - 20 years Anniversary
          </motion.h1>
          <Spinner />
          <motion.p
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='w-fit mx-auto max-h-fit text-sm md:text-xl text-center leading-loose text-slate-200 drop-shadow-xl z-10 px-8 relative mt-2 font-primary p-4 rounded-md transition-opacity duration-500 pointer-events-none'
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
          <div className='absolute top-16 left-8 text-xl font-branding  drop-shadow-xl transition-opacity duration-500 pointer-events-none text-gray-500'>
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
