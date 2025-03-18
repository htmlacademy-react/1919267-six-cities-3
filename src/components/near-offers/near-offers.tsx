import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type NearOffersProps = {
  nearbyPlaces: Offer[];
};

function NearOffers({ nearbyPlaces }: NearOffersProps) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighborhood</h2>
        <div className="near-places__list places__list">
          {nearbyPlaces.map((place) => (
            <OfferCard
              key={place.id}
              block={'near-places'}
              offer={place}
              size="large"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default NearOffers;
