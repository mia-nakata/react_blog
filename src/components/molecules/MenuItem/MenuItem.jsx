import styles from './MenuItem.module.css';

export default function MenuItem({ text = 'MENU-01', href = '#' }) {
  return (
    <a href={href} className={styles.item}>
      {text}
    </a>
  );
}