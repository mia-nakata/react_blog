import styles from './PictureItem.module.css';

export default function PictureItem({ imgUrl }) {
  return (
    <div 
      className={styles.picture}
      // imgUrlがある時だけ、背景画像としてスタイルを上書きします
      style={imgUrl ? { backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    ></div>
  );
}