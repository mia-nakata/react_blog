import styles from './TextArea.module.css';

export default function TextArea({ placeholder = 'ここに記入してください。' }) {
  return (
    <textarea 
      className={styles.textarea} 
      placeholder={placeholder}
    ></textarea>
  );
}