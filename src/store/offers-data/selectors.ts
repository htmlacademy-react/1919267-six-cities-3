import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectCurrentCity = (state: State) =>
  state[NameSpace.OffersData].currentCity;
export const selectOffers = (state: State) =>
  state[NameSpace.OffersData].offers;
export const selectOffersByCurrentCity = createSelector(
  selectOffers,
  selectCurrentCity,
  (allOffers, currentCity) =>
    allOffers.filter((offer) => offer.city.name === currentCity.name)
);
export const selectOffersFetchingStatus = (state: State) =>
  state[NameSpace.OffersData].offersFetchingStatus;
export const selectActiveId = (state: State) =>
  state[NameSpace.OffersData].activeId;
