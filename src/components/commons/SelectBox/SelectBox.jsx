import styles from './SelectBox.module.css';

export default function SelectBox() {
  const options = ['友人の紹介', 'SNS', 'webバナー', '動画配信サイト', '広告・ポスター', 'その他'];

  return (
    <select className={styles.select}>
      <option value="">-- 1つ選択してください --</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  );
}