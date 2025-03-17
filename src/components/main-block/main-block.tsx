import { useState } from 'react';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import { addPluralEnding } from '../../utils/common';
import SortingForm from '../sortingForm/sortingForm';
import { DEFAULT_SORTING_OPTION, Sorting } from '../../const';
import OffersCardList from '../offers-card-list/offers-card-list';
import Map from '../map/map';

type MainBlockProps = {
  currentLocation: City;
  currentOffers: Offer[];
};

function MainBlock({ currentLocation, currentOffers }: MainBlockProps) {
  const [hoveredOfferId, setHoveredOfferId] = useState<Offer['id'] | null>(
    null,
  );
  const [activeSorting, setActiveSorting] = useState<Sorting>(
    DEFAULT_SORTING_OPTION,
  );
  const locationForMap = currentOffers[0].city;

  function handleCardHover(offerId: Offer['id'] | null) {
    setHoveredOfferId(offerId);
  }

  function handleSortingChange(option: Sorting) {
    setActiveSorting(option);
  }

  return (
    <div className="cities__places-container container">
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
          currentOffers={currentOffers}
          onCardHover={handleCardHover}
        />
      </section>
      <div className="cities__right-section">
        <Map
          offers={currentOffers}
          city={locationForMap}
          hoveredOfferId={hoveredOfferId}
          className={'cities__map'}
        />
      </div>
    </div>
  );
}

export default MainBlock;
