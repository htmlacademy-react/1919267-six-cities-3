import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectCurrentCity = createSelector(
  (state: State) => state[NameSpace.OffersData],
  (state) => state.currentCity
);
export const selectOffers = createSelector(
  (state: State) => state[NameSpace.OffersData],
  (state) => state.offers
);
export const selectOffersByCurrentCity = createSelector(
  selectOffers,
  selectCurrentCity,
  (allOffers, currentCity) =>
    allOffers.filter((offer) => offer.city.name === currentCity.name)
);
export const selectOffersFetchingStatus = createSelector(
  (state: State) => state[NameSpace.OffersData],
  (state) => state.offersFetchingStatus
);
export const selectActiveId = createSelector(
  (state: State) => state[NameSpace.OffersData],
  (state) => state.activeId
);
