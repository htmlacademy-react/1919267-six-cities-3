import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './not-found-page.module.css';
import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';

const pageContentVariants = {
  page: { text: 'Sorry! The page is not found' },
  offer: { text: 'The offer with such ID is not found' },
};

type NotFoundPageProps = {
  type: keyof typeof pageContentVariants;
};

function NotFoundPage({ type }: NotFoundPageProps) {
  return (
    <main className="page page--favorites-empty container">
      <Helmet>
        <title>6 cities. Error 404 page</title>
      </Helmet>
      <h1 className="visually-hidden">6 Cities: Page not found</h1>
      <div className="header__wrapper">
        <Logo block="header" size="large" />
      </div>
      <section className="page__favorites-container container">
        <div className="favorites__status-wrapper">
          <b className="favorites__status">{pageContentVariants[type].text}</b>
          <Link to={AppRoute.root} className={styles.link}>
            Go back to main page
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
