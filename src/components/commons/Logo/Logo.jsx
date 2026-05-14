import styles from './Logo.module.css';

// variantという名前で色の種類（'black', 'pink', 'white'）を受け取れるようにします
// デフォルトは 'black' に設定します
export default function Logo({ variant = 'black' }) {
  
  // 受け取った variant に合わせて、CSSクラスを切り替える仕組みを作ります
  let colorClass = styles.black;
  if (variant === 'pink') {
    colorClass = styles.pink;
  } else if (variant === 'white') {
    colorClass = styles.white;
  }

  return (
    // 共通のロゴスタイル（.logo）と、色のスタイル（colorClass）を合体させます
    <span className={`${styles.logo} ${colorClass}`}>
      BAMOS DESIGN
    </span>
  );
}