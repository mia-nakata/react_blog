import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../../commons/Logo/Logo';
import MenuItem from '../../molecules/MenuItem/MenuItem';
import PlusBtn from '../../molecules/PlusBtn/PlusBtn';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.headerContainer}>
      
      <header className={styles.header}>
        <Logo variant="black" />
        
        <PlusBtn onClick={(isOpen) => setIsMenuOpen(isOpen)} />
      </header>

      <div className={`${styles.drawer} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.nav}>
          <MenuItem text="MENU-01" href="#1" />
          <MenuItem text="MENU-02" href="#2" />
          <MenuItem text="MENU-03" href="#3" />
          <MenuItem text="MENU-04" href="#4" />
        </nav>
      </div>
      
    </div>
  );
}