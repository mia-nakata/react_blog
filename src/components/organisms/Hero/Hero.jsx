import styles from './Hero.module.css';
import Logo from '../../commons/Logo/Logo';

export default function Hero({ style }) {
  return (
    <div className={styles.heroContainer} style={style}>
      <div className={styles.logoWrapper}>
        <Logo variant="white" />
      </div>
    </div>
  );
}