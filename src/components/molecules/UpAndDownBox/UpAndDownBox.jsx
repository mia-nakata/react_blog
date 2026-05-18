import styles from './UpAndDownBox.module.css';
import ThumbsUpButton from '../../commons/ThumbsUpButton/ThumbsUpButton';
import ThumbsDownButton from '../../commons/ThumbsDownButton/ThumbsDownButton';

// 👇 引数の { } の中で likes と dislikes を受け取ります
export default function UpAndDownBox({ likes, dislikes }) {
  return (
    <div className={styles.container}>
      {/* いいねボタン */}
      <div className={styles.iconGroup}>
        <ThumbsUpButton initialCount={likes} />
      </div>

      {/* よくないねボタン */}
      <div className={styles.iconGroup}>
        <ThumbsDownButton initialCount={dislikes} />
      </div>
    </div>
  );
}