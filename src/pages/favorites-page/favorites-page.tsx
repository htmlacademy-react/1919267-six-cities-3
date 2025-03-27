import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import OfferCard from '../../components/offer-card/offer-card';
import { AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { groupOffersByLocation } from '../../utils/offer';

type FavoritesPageProps = {
  authorizationStatus: AuthStatus;
};

function FavoritesPage({ authorizationStatus }: FavoritesPageProps) {
  const offers = useAppSelector((state) => state.offers);
  const favorites = offers.filter((item) => item.isFavorite);
  const favoritesByLocation = groupOffersByLocation(favorites);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Favorites page</title>
      </Helmet>
      <Header isAuth={authorizationStatus} />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesByLocation).map(
                ([location, groupedOffers]) => (
                  <li className="favorites__locations-items" key={location}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{location}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {groupedOffers.map((offer) => (
                        <OfferCard
                          key={offer.id}
                          offer={offer}
                          block="favorites"
                          size="small"
                        />
                      ))}
                    </div>
                  </li>
                )
              )}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
