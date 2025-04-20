import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks';
import { setActiveId } from '../../store/offers-data/offers-data';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  currentOffers: Offer[];
};

function OffersList({ currentOffers }: OffersListProps) {
  const dispatch = useAppDispatch();
  const handleMouseEnter = useCallback(
    (offerId: Offer['id']) => {
      dispatch(setActiveId(offerId));
    },
    [dispatch]
  );

  const handleMouseLeave = useCallback(() => {
    dispatch(setActiveId(undefined));
  }, [dispatch]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {currentOffers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          block="cities"
          size="large"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

export default OffersList;
