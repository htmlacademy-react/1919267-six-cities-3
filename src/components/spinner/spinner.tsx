import styles from './spinner.module.css';

function Spinner() {
  return (
    <section className={styles.loading}>
      <p>Loading ...</p>
    </section>
  );
}

export default Spinner;
