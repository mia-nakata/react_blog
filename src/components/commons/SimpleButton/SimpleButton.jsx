import styles from './SimpleButton.module.css';

export default function SimpleButton({ children, variant, onClick }) {
  
  // 👇 ここで buttonClass を定義します！
  // variantに "black" が渡されたら黒いスタイルを追加、それ以外は標準スタイルにします
  const buttonClass = variant === 'black' 
    ? `${styles.button} ${styles.black}` 
    : styles.button;

  return (
    // 定義した buttonClass と onClick をボタンに適用します
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}