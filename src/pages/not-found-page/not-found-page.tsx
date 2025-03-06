import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './not-found-page.module.css';
import Logo from '../../components/logo/logo';

function NotFoundPage() {
  return (
    <main className="page page--favorites-empty container">
      <title>6 Cities: Page not found</title>
      <div className="header__wrapper">
        <Logo block="header" size="large" />
      </div>
      <section className="page__favorites-container container">
        <div className="favorites__status-wrapper">
          <b className="favorites__status">404 Not Found</b>
          <Link to={AppRoute.root} className={styles.link}>
            Go back to main page
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
