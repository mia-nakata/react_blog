import { useState } from 'react';
import styles from './ThumbsDownButton.module.css'; // ← CSSモジュールを読み込む
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function ThumbsDownButton({ initialCount = 12345 }) {
  const [disliked, setDisliked] = useState(false);
  const [count, setCount] = useState(initialCount);

  const handleToggle = () => {
    setDisliked(!disliked);
    setCount(disliked ? count - 1 : count + 1);
  };

  return (
    <div className={styles.buttonContainer} onClick={handleToggle}>
      
      {disliked ? (
        <ThumbDownIcon className={`${styles.icon} ${styles.iconDisliked}`} />
      ) : (
        <ThumbDownOutlinedIcon className={`${styles.icon} ${styles.iconOutlined}`} />
      )}
      
      <span className={styles.countText}>
        {count}
      </span>
      
    </div>
  );
}