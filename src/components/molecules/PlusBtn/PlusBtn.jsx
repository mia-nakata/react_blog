import { useState } from 'react';
import styles from './PlusBtn.module.css';

export default function PlusBtn({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick(!isOpen); // 親コンポーネントにも状態を伝える用
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      <span className={styles.icon}>{isOpen ? '×' : '+'}</span>
      <span className={styles.text}>{isOpen ? 'CLOSE' : 'MENU'}</span>
    </button>
  );
}