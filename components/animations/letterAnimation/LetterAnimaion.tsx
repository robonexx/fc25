import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import styles from './letterAnimation.module.scss';

interface TextWordAnimationProps {
  text: string;
}

const LetterAnimation: React.FC<TextWordAnimationProps> = ({ text }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const words = text.split(' ');

  return (
    <motion.h2
      ref={ref}
      className={styles.reveal}
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial='hidden'
      transition={{ duration: 1, delay: 0.5 }}
    >
      {words.map((word, wordIdx) => (
        <motion.span key={wordIdx} className={styles.textSplit}>
          {word.split('').map((letter, letterIdx) => (
            <motion.span
              key={letterIdx}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: wordIdx * 0.3 + letterIdx * 0.1,
                  },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
          {wordIdx < words.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default LetterAnimation;
