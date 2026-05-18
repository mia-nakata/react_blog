import { useEffect } from 'react';
import styles from './ModalWindow.module.css';
import CloseButtonSmall from '../../commons/CloseButtonSmall/CloseButtonSmall';
import RadioButton from '../../commons/RadioButton/RadioButton';
import CheckBox from '../../commons/CheckBox/CheckBox';
import SelectBox from '../../commons/SelectBox/SelectBox';
import TextArea from '../../commons/TextArea/TextArea';
import SimpleButton from '../../commons/SimpleButton/SimpleButton';

export default function ModalWindow({ onClose }) {
  useEffect(() => {
    // モーダルが開いた時（マウント時）：bodyのスクロールを隠す（止める）
    document.body.style.overflow = 'hidden';

    // モーダルが閉じる時（アンマウント時）：元の状態に戻す
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []); // 空の配列 [] を渡すことで、最初の一回だけ実行させます
  return (
    // 👇 1. 背景（黒い部分）をクリックした時に閉じる
    <div className={styles.overlay} onClick={onClose}>
      
      {/* 👇 2. モーダルの中身をクリックしても閉じないようにする（伝播を止める） */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        
        {/* 上部の画像エリア（Closeボタン付き） */}
        <div className={styles.imageHeader}>
          {/* 👇 3. Miaさんが作ったバツボタンを囲む div に onClick={onClose} を追加！ */}
          <div className={styles.closeBtnWrapper} onClick={onClose} style={{ cursor: 'pointer' }}>
            <CloseButtonSmall />
          </div>
        </div>

        {/* フォーム本体エリア */}
        <div className={styles.content}>
          <h2 className={styles.title}>FEEDBACK</h2>
          <p className={styles.intro}>
            Thank you for visiting BAMOS DESIGN.<br />
            Please take a moment to complete our survey to help us improve our services.
          </p>

          <div className={styles.formGroup}>
            <label className={styles.label}>Age</label>
            <div className={styles.grid3}>
              <RadioButton name="age" label="0 - 10" />
              <RadioButton name="age" label="10 - 20" />
              <RadioButton name="age" label="20 - 30" />
              <RadioButton name="age" label="30 - 40" />
              <RadioButton name="age" label="40 - 50" />
              <RadioButton name="age" label="50 and above" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>How did you hear about BAMOS DESIGN?</label>
            <SelectBox />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>What is your favorite field or area of interest?</label>
            <div className={styles.grid3}>
              <CheckBox label="音楽" />
              <CheckBox label="芸術" />
              <CheckBox label="デザイン" />
              <CheckBox label="プログラミング" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>What kind of special features or topics would you like to read on BAMOS DESIGN in the future?</label>
            <TextArea />
          </div>

          <div className={styles.submitWrapper}>
            {/* 文字をSUBMITで上書きして使います */}
            <SimpleButton variant="black">SUBMIT</SimpleButton>
          </div>

        </div>
      </div>
    </div>
  );
}