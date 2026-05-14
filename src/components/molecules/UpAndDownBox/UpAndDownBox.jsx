import styles from './UpAndDownBox.module.css';
// ※フォルダの階層が変わるので、../ を2回使って commons まで戻ります
import ThumbsUpButton from '../../commons/ThumbsUpButton/ThumbsUpButton';
import ThumbsDownButton from '../../commons/ThumbsDownButton/ThumbsDownButton';

export default function UpAndDownBox() {
  return (
    <div className={styles.container}>
      <ThumbsUpButton />
      <ThumbsDownButton />
    </div>
  );
}