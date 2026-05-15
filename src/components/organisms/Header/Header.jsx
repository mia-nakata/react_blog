import { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../../commons/Logo/Logo';
import MenuItem from '../../molecules/MenuItem/MenuItem';
import PlusBtn from '../../molecules/PlusBtn/PlusBtn';

export default function Header() {
  // メニューの開閉状態を管理する（初期値は false = 閉じている）
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // position: relative の基準にするため、全体をdivで囲みます
    <div className={styles.headerContainer}>
      
      {/* --- ヘッダー本体（PC/SP共通） --- */}
      <header className={styles.header}>
        <Logo variant="black" />
        
        {/* PlusBtnがクリックされたら、isMenuOpenのtrue/falseを切り替える */}
        <PlusBtn onClick={(isOpen) => setIsMenuOpen(isOpen)} />
      </header>

      {/* --- ドロワーメニュー --- */}
      {/* isMenuOpenがtrueの時だけ、.open クラスを追加して表示させます */}
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