import { useState } from 'react';
import styles from './DrawerButton.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function DrawerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <CloseIcon sx={{ fontSize: 40, color: '#CCCCCC' }} />
      ) : (
        <MenuIcon sx={{ fontSize: 40, color: '#CCCCCC' }} />
      )}
    </button>
  );
}