import { useState } from 'react';
import styles from './ThumbsUpButton.module.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function ThumbsUpButton({ initialCount = 12345 }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialCount);

  const handleToggle = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };

  return (
    <div className={styles.buttonContainer} onClick={handleToggle}>
      
      {liked ? (
        <ThumbUpIcon className={`${styles.icon} ${styles.iconLiked}`} />
      ) : (
        <ThumbUpOutlinedIcon className={`${styles.icon} ${styles.iconOutlined}`} />
      )}
      
      <span className={styles.countText}>
        {count}
      </span>
      
    </div>
  );
}