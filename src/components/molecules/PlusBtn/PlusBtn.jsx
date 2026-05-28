import styles from './PlusBtn.module.css';

export default function PlusBtn({ isOpen, onClick }) {
  return (
    <button 
      className={`${styles.button} ${isOpen ? styles.open : ''}`} 
      onClick={onClick}
    >
      <svg
        className={`${styles.iconSvg} ${isOpen ? styles.iconOpen : ''}`}
        width="28" 
        height="28" 
        viewBox="0 0 28 28"
        fill="none"
        stroke={isOpen ? "#FFFFFF" : "#111111"}
        strokeWidth="4"
      >
        <path d="M2 14L26 14" />
        <path d="M14 2L14 26" />
      </svg>
      
      <span className={styles.text}>{isOpen ? 'CLOSE' : 'MENU'}</span>
    </button>
  );
}