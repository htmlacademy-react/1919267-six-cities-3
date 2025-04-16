import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { groupOffersByLocation } from '../../utils/offer';
import FavoritesListBlock from '../../components/favorites-list-block/favorites-list-block';
import FavoritesEmptyBlock from '../../components/favorites-empty-block/favorites-empty-block';
import Footer from '../../components/footer/footer';
import {
  selectFavorites,
  selectFetchingFavoritesStatus,
} from '../../store/favorites-data/selectors';
import { RequestStatus } from '../../const';
import Loader from '../../components/loader/loader';
import { useEffect } from 'react';
import { fetchFavoriteOffers } from '../../store/api-actions';

function FavoritesPage() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);
  const favoritesByLocation = groupOffersByLocation(favorites);
  const hasFavorites = Boolean(favorites?.length);
  const favoritesFetchingStatus = useAppSelector(selectFetchingFavoritesStatus);

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  return (
    <div className={hasFavorites ? 'page' : 'page page--favorites-empty'}>
      <Helmet>
        <title>6 cities. Favorites page</title>
      </Helmet>
      {favoritesFetchingStatus === RequestStatus.Loading && <Loader />}
      <Header />
      <main
        className={`page__main page__main--favorites ${
          hasFavorites ? '' : 'page__main--favorites-empty'
        }`}
      >
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
