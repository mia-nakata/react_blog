import styles from './CardContent.module.css';
import UpAndDownBox from '../../molecules/UpAndDownBox/UpAndDownBox'; // 先ほど作った分子コンポーネント

export default function CardContent({ title = "Cat , catherine", subtitle = "syo motoyama" }) {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <UpAndDownBox />
    </div>
  );
}