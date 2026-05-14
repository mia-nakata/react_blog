import styles from './HeaderSp.module.css';
import Logo from '../../commons/Logo/Logo';
import PlusBtn from '../PlusBtn/PlusBtn';

export default function HeaderSp() {
  return (
    <header className={styles.header}>
      <Logo variant="black" />
      <PlusBtn />
    </header>
  );
}