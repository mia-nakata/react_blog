import styles from './SimpleButton.module.css';

// variant（色）と children（ボタンの中のテキスト）を props として受け取ります
export default function SimpleButton({ variant = 'black', children = '送信', onClick }) {
  
  // variant の値によって適用するCSSクラスを切り替えます
  const colorClass = variant === 'pink' ? styles.pink : styles.black;

  return (
    <button
      className={`${styles.button} ${colorClass}`}
      onClick={onClick}
    >
      {/* children にすることで、「送信」以外の文字も外から自由に設定できるようになります */}
      {children}
    </button>
  );
}