import { useMemo, useState } from 'react';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import { addPluralEnding } from '../../utils/common';
import { DEFAULT_SORTING_OPTION, Sorting } from '../../const';
import Map from '../map/map';
import { sorting } from '../../utils/offer';
import OffersList from '../offers-list/offers-list';
import { SortingForm } from '../sorting-form/sorting-form';

type MainBlockProps = {
  currentLocation: City;
  currentOffers: Offer[];
};

function MainBlock({ currentLocation, currentOffers }: MainBlockProps) {
  const [activeSorting, setActiveSorting] = useState<Sorting>(
    DEFAULT_SORTING_OPTION
  );

  function handleSortingChange(option: Sorting) {
    setActiveSorting(option);
  }

  const sortedOffers = useMemo(
    () => sorting[activeSorting](currentOffers),
    [activeSorting, currentOffers]
  );

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
        <OffersList currentOffers={sortedOffers} />
      </section>
      <div className="cities__right-section">
        <Map
          offers={currentOffers}
          city={currentLocation}
          className={'cities__map'}
        />
      </div>
    </>
  );
}

export default MainBlock;
