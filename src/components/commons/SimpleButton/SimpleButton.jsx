import styles from './SimpleButton.module.css';

export default function SimpleButton({ children, variant, onClick }) {
  
  const buttonClass = variant === 'black' 
    ? `${styles.button} ${styles.black}` 
    : styles.button;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}