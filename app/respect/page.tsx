import PresentationCard from '@/components/PresentationCard';
import React from 'react';
import styles from './respect.module.scss';

const Respect = () => {
  return (
    <div className={styles.guests}>
      <h1>We&apos;ll meet at the Lockers Lake</h1>
      <PresentationCard />
    </div>
  );
};

export default Respect;
