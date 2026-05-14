import styles from './Input.module.css'; // RadioButtonと同じCSSを使い回せます

export default function CheckBox({ label }) {
  return (
    <label className={styles.label}>
      <input type="checkbox" className={styles.inputBox} />
      {label && <span>{label}</span>}
    </label>
  );
}