import styles from './Logo.module.css';

export default function Logo({ variant = 'black' }) {
  
  let colorClass = styles.black;
  if (variant === 'pink') {
    colorClass = styles.pink;
  } else if (variant === 'white') {
    colorClass = styles.white;
  }

  return (
    <span className={`${styles.logo} ${colorClass}`}>
      BAMOS DESIGN
    </span>
  );
}