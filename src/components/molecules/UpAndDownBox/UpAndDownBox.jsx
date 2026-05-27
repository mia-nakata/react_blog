import styles from './UpAndDownBox.module.css';
import ThumbsUpButton from '../../commons/ThumbsUpButton/ThumbsUpButton';
import ThumbsDownButton from '../../commons/ThumbsDownButton/ThumbsDownButton';

export default function UpAndDownBox({ likes, dislikes }) {
  return (
    <div className={styles.container}>
      <div className={styles.iconGroup}>
        <ThumbsUpButton initialCount={likes} />
      </div>

      <div className={styles.iconGroup}>
        <ThumbsDownButton initialCount={dislikes} />
      </div>
    </div>
  );
}
