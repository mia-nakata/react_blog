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
    // Boxの代わりに div を使い、CSSモジュールのクラスを当てます
    <div className={styles.buttonContainer} onClick={handleToggle}>
      
      {/* 状態によってアイコンと色（クラス）を切り替えます */}
      {disliked ? (
        <ThumbDownIcon className={`${styles.icon} ${styles.iconDisliked}`} />
      ) : (
        <ThumbDownOutlinedIcon className={`${styles.icon} ${styles.iconOutlined}`} />
      )}
      
      {/* Typographyの代わりに span を使います */}
      <span className={styles.countText}>
        {count}
      </span>
      
    </div>
  );
}