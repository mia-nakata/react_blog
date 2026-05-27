import styles from './CardContent.module.css';
import UpAndDownBox from '../../molecules/UpAndDownBox/UpAndDownBox';

export default function CardContent({ title, subtitle, likes, dislikes }) {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <UpAndDownBox likes={likes} dislikes={dislikes} />
    </div>
  );
}