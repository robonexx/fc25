import styles from './WordSpinner.module.scss';

const WordSpinner = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className='text-aubergine-500 font-branding'>
        The artform of locking
      </h2>
      <div className={styles.words}>
        <div className='text-salmon-500 font-semibold font-primary'>
          <h2 className={styles.word}>History</h2>
          <h2 className={styles.word}>Foundations</h2>
          <h2 className={styles.word}>Culture</h2>
          <h2 className={styles.word}>Knowledge</h2>
        </div>
      </div>
    </div>
  );
};

export default WordSpinner;
