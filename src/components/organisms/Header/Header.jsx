import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../../commons/Logo/Logo';
import MenuItem from '../../molecules/MenuItem/MenuItem';
import PlusBtn from '../../molecules/PlusBtn/PlusBtn';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`${styles.headerContainer} ${isMenuOpen ? styles.headerOpen : ''}`}
    >
      <header className={styles.header}>
        <Logo variant={isMenuOpen ? 'white' : 'black'} />

        <div
          className={`${styles.navContainer} ${isMenuOpen ? styles.open : ''}`}
        >
          <nav className={styles.nav}>
            <MenuItem text="MENU-01" href="#1" />
            <MenuItem text="MENU-02" href="#2" />
            <MenuItem text="MENU-03" href="#3" />
            <MenuItem text="MENU-04" href="#4" />
          </nav>
        </div>
        <div className={styles.menuBtn}>
          <PlusBtn
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />{' '}
        </div>
      </header>
    </div>
  );
}
