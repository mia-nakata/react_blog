import styles from './Card.module.css';
import PictureItem from '../../commons/PictureItem/PictureItem';
import CardContent from '../CardContent/CardContent';

export default function Card() {
  return (
    <div className={styles.card}>
      <PictureItem />
      <CardContent />
    </div>
  );
}