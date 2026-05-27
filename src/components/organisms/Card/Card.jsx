import styles from './Card.module.css';
import PictureItem from '../../commons/PictureItem/PictureItem';
import CardContent from '../CardContent/CardContent';

export default function Card({ data }) {
  if (!data) return null;

  return (
    <div className={styles.card}>
      <PictureItem imgUrl={data.img} />
      <CardContent 
        title={data.title} 
        subtitle={data.author} 
        likes={data.likes} 
        dislikes={data.dislikes} 
      />
    </div>
  );
}