import styles from './loader.module.css';

function Loader() {
  return <span className={styles.loader} data-testid="loader"></span>;
}

export default Loader;
