import styles from '../CheckBox/Input.module.css';

export default function RadioButton({ label, name }) {
  return (
    <label className={styles.label}>
      <input type="radio" name={name} className={styles.inputBox} />
      {label && <span>{label}</span>}
    </label>
  );
}