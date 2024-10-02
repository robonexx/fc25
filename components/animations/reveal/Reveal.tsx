import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

import styles from './reveal.module.scss';

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  ref: any;
}

export const Reveal = ({ children, width = 'fit-content' }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // use to contol animation
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  // use to trigger animation when in view
  useEffect(() => {
    console.log('is in view');
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
  }, [isInView, slideControls, mainControls]);

  return (
    <div className={`${styles.reveal} ${width}`} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>
      <motion.div
        className={styles.effect}
        variants={{
          hidden: { left: 0, opacity: [0, 0.8] },
          visible: { left: '100%', opacity: 1 },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
      ></motion.div>
    </div>
  );
};
