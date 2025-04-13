import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { groupOffersByLocation } from '../../utils/offer';
import FavoritesListBlock from '../../components/favorites-list-block/favorites-list-block';
import FavoritesEmptyBlock from '../../components/favorites-empty-block/favorites-empty-block';
import Footer from '../../components/footer/footer';
import { selectFavorites } from '../../store/favorites-data/selectors';

function FavoritesPage() {
  const favorites = useAppSelector(selectFavorites);
  const favoritesByLocation = groupOffersByLocation(favorites);
  const hasFavorites = Boolean(favorites?.length);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Favorites page</title>
      </Helmet>
      <Header />

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
