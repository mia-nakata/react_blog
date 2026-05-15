import { useState } from 'react';
import styles from './PlusBtn.module.css';

export default function PlusBtn({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick(!isOpen); 
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      
      {/* CSSの箱ではなく、SVG（画像データ）を直接描画します */}
      <svg
        className={`${styles.iconSvg} ${isOpen ? styles.iconOpen : ''}`}
        width="28" 
        height="28" 
        viewBox="0 0 28 28"
        fill="none"
        stroke="#111111"
        strokeWidth="3" /* 線の太さ！ここを 3 や 4 にすると太くなります */
      >
        {/* 横線 */}
        <path d="M2 14L26 14" />
        {/* 縦線 */}
        <path d="M14 2L14 26" />
      </svg>
      
      <span className={styles.text}>{isOpen ? 'CLOSE' : 'MENU'}</span>
    </button>
  );
}