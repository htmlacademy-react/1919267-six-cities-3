import { Cities } from '../../const';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type FavoritesListBlockProps = {
  favoritesByLocation: Record<Cities, Offer[]>;
};

function FavoritesListBlock({ favoritesByLocation }: FavoritesListBlockProps) {
  return (
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
  );
}

export default FavoritesListBlock;
