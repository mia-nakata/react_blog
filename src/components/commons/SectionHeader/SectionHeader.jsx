import styles from './SectionHeader.module.css';

export default function SectionHeader({ children = 'Latest Blog Posts' }) {
  return (
    <h2 className={styles.header}>
      {children}
    </h2>
  );
}