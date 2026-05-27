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
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.imageHeader}>
          <div
            className={styles.closeBtnWrapper}
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          >
            <CloseButtonSmall />
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>FEEDBACK</h2>
          <p className={styles.intro}>
            Thank you for visiting BAMOS DESIGN.
            <br />
            Please take a moment to complete our survey to help us improve our
            services.
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
            <label className={styles.label}>
              How did you hear about BAMOS DESIGN?
            </label>
            <SelectBox />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              What is your favorite field or area of interest?
            </label>
            <div className={styles.grid3}>
              <CheckBox label="音楽" />
              <CheckBox label="芸術" />
              <CheckBox label="デザイン" />
              <CheckBox label="プログラミング" />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              What kind of special features or topics would you like to read on
              BAMOS DESIGN in the future?
            </label>
            <TextArea />
          </div>

          <div className={styles.submitWrapper}>
            <SimpleButton variant="black">SUBMIT</SimpleButton>
          </div>
        </div>
      </div>
    </div>
  );
}
