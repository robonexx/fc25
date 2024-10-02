'use client';
import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Card.module.scss';
import Image, { StaticImageData } from 'next/image';

interface PersonType {
  id: number;
  title: string;
  year: string;
  desc: string;
  image?: StaticImageData | string;
  itemPng?: StaticImageData | string;
}

const Card: FC<PersonType> = ({
  title,
  year,
  desc,
  id,
  image,
  itemPng,
}: PersonType) => {
  return (
    <AnimatePresence>
      <div className={styles.cardWrapper} key={id}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
              >
                  <div className={styles.overlay}></div>
          <Image
            src={`${image}`}
            alt={title}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40, x: 30 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, delay: 0.4 }}
          className={styles.png}
        >
          <Image src={`${itemPng}`} alt={title} fill />
        </motion.div>
        <div className={styles.cardInfo}>
          <div>
            <div className={styles.cardYear}>{year} 🕊️</div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.cardTitle}>{title}</div>
            </motion.div>
          </div>
          <div className={styles.desc}>
            <span>{desc}</span>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Card;
