import SpinnerIcon from '../../assets/icons/spinner-icon';
import styles from './spinner.module.css';

function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerImg}>
        <SpinnerIcon />
      </div>
    </div>
  );
}

export default Spinner;
