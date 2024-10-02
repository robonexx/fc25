'use client';
import { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';
import ParallaxZoom from '@/components/ParallaxZoom/ParallaxZoom';
import ParallaxZoom2 from '@/components/ParallaxZoom/ParallaxZoom2';
import ParallaxZoom3 from '@/components/ParallaxZoom/ParallaxZoom3';
import React from 'react';

const Media = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <ParallaxZoom />
      <ParallaxZoom2 />
      <ParallaxZoom3 />
    </div>
  );
};

export default Media;
