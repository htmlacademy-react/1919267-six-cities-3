import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersCardListProps = {
  currentOffers: Offer[];
  onCardHover: (offerId: Offer['id'] | null) => void;
};

function OffersCardList({ currentOffers, onCardHover }: OffersCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {currentOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          block="cities"
          size="large"
          onCardHover={onCardHover}
        />
      ))}
    </div>
  );
}

export default OffersCardList;
