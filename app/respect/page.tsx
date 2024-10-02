import PresentationCard from '@/components/PresentationCard';
import React from 'react';
import styles from './respect.module.scss';

const Respect = () => {
  return (
    <div className={styles.respect}>
      <h1 className='absolute top-40 text-7xl'>We&apos;ll meet at the Lockers Lake</h1>
      <PresentationCard />
    </div>
  );
};

export default Respect;
