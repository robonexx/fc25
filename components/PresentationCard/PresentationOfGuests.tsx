'use client'

import { useEffect, useState } from 'react';
import styles from './Presentation.module.css';
import Card from './Card';
import { peopleData } from '@/contants/data';

const PresentationOfGuests = () => {
  const [data, setData] = useState(peopleData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const showNextProduct = () => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    };

    const timeoutId = setTimeout(() => {
      showNextProduct();
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, data.length]);

  return (
    <div className={styles.container}>
      {data.map((p, idx) => {
        if (idx === currentIndex) {
          return (
            <div key={p.id}>
              <Card {...p} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default PresentationOfGuests;
