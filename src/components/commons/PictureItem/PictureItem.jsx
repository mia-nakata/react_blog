import styles from './PictureItem.module.css';

export default function PictureItem({ imgUrl }) {
  return (
    <div 
      className={styles.picture}
      style={imgUrl ? { backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    ></div>
  );
}