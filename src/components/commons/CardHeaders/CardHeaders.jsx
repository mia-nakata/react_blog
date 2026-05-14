import styles from './CardHeaders.module.css';
import CloseButtonSmall from '../CloseButtonSmall/CloseButtonSmall'; // さっき作ったボタンを読み込む

export default function CardHeaders({ title = "Cat , catherine", subtitle = "syo motoyama" }) {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <CloseButtonSmall />
    </div>
  );
}