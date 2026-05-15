import styles from './Hero.module.css';
import Logo from '../../commons/Logo/Logo';

export default function Hero({ style }) { // 引数に { style } を追加
  return (
    // style={style} を追加して、App.jsxからの指定を受け取れるようにします
    <div className={styles.heroContainer} style={style}>
      <div className={styles.logoWrapper}>
        <Logo variant="white" />
      </div>
    </div>
  );
}