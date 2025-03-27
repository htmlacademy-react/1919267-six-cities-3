import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { groupOffersByLocation } from '../../utils/offer';
import FavoritesListBlock from '../../components/favorites-list-block/favorites-list-block';
import FavoritesEmptyBlock from '../../components/favorites-empty-block/favorites-empty-block';

type FavoritesPageProps = {
  authorizationStatus: AuthStatus;
};

function FavoritesPage({ authorizationStatus }: FavoritesPageProps) {
  const offers = useAppSelector((state) => state.offers);
  const favorites = offers.filter((item) => item.isFavorite);
  const favoritesByLocation = groupOffersByLocation(favorites);
  const hasFavorites = Boolean(favorites?.length);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Favorites page</title>
      </Helmet>
      <Header isAuth={authorizationStatus} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {hasFavorites ? (
            <FavoritesListBlock favoritesByLocation={favoritesByLocation} />
          ) : (
            <FavoritesEmptyBlock />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
