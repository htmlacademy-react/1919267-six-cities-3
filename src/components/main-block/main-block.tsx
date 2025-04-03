import { useState } from 'react';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import { addPluralEnding } from '../../utils/common';
import SortingForm from '../sorting-form/sorting-form';
import { DEFAULT_SORTING_OPTION, Sorting } from '../../const';
import OffersCardList from '../offers-card-list/offers-card-list';
import Map from '../map/map';
import { sorting } from '../../utils/offer';

type MainBlockProps = {
  currentLocation: City;
  currentOffers: Offer[];
};

function MainBlock({ currentLocation, currentOffers }: MainBlockProps) {
  const [hoveredOfferId, setHoveredOfferId] = useState<Offer['id'] | null>(
    null
  );
  const [activeSorting, setActiveSorting] = useState<Sorting>(
    DEFAULT_SORTING_OPTION
  );

  function handleCardHover(offerId: Offer['id'] | null) {
    setHoveredOfferId(offerId);
  }

  function handleSortingChange(option: Sorting) {
    setActiveSorting(option);
  }

  const sortedOffers = sorting[activeSorting](currentOffers);

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {currentOffers.length} place{addPluralEnding(currentOffers.length)} to
          stay in {currentLocation.name}
        </b>
        <SortingForm
          activeSorting={activeSorting}
          onSortingOptionClick={handleSortingChange}
        />
        <OffersCardList
          currentOffers={sortedOffers}
          onCardHover={handleCardHover}
        />
      </section>
      <div className="cities__right-section">
        <Map
          offers={currentOffers}
          city={currentLocation}
          hoveredOfferId={hoveredOfferId}
          className={'cities__map'}
        />
      </div>
    </>
  );
}

export default MainBlock;
