import { useState } from 'react';
import styles from './ThumbsUpButton.module.css'; // ← 先ほど作ったCSSモジュールをインポート
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
    // Box を div に変更し、CSSモジュールのクラスを当てます
    <div className={styles.buttonContainer} onClick={handleToggle}>
      
      {/* liked の状態によってアイコンと色（クラス）を切り替えます */}
      {liked ? (
        <ThumbUpIcon className={`${styles.icon} ${styles.iconLiked}`} />
      ) : (
        <ThumbUpOutlinedIcon className={`${styles.icon} ${styles.iconOutlined}`} />
      )}
      
      {/* Typography を span に変更します */}
      <span className={styles.countText}>
        {count}
      </span>
      
    </div>
  );
}