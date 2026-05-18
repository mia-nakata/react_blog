import styles from './CardContent.module.css';
import UpAndDownBox from '../../molecules/UpAndDownBox/UpAndDownBox';

// 👇 引数の { } の中で likes と dislikes をしっかり受け取ります
export default function CardContent({ title, subtitle, likes, dislikes }) {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {/* 👇 受け取った likes と dislikes をさらに UpAndDownBox に引き渡します */}
      <UpAndDownBox likes={likes} dislikes={dislikes} />
    </div>
  );
}