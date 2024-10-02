'use client';
import styles from './parallaxzoom.module.scss';
import Picture1 from '/public/images/2018_panel.jpg';
import Picture2 from '/public/images/2005.png';
import Picture3 from '/public/images/2009.jpeg';
import Picture4 from '/public/images/greg_amine.jpg';
import Picture5 from '/public/images/orebro2022.jpeg';
import Picture6 from '/public/images/skeet2009.jpeg';
import Picture7 from '/public/images/2018_youngins.jpeg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

const ParallaxZoom = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt='image' placeholder='blur' />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ParallaxZoom;
