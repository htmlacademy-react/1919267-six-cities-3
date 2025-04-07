import { useAppSelector } from '../../hooks';
import styles from './error-message.module.css';

function ErrorMessage() {
  const error = useAppSelector((state) => state.error);

  return error ? <div className={styles.errorMessage}>{error}</div> : null;
}

export default ErrorMessage;
