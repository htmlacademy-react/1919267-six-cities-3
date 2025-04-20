import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectNearbyOffers = createSelector(
  (state: State) => state[NameSpace.NearbyOffersData],
  (state) => state.nearbyOffers
);
export const selectNearbyOffersFetchingStatus = createSelector(
  (state: State) => state[NameSpace.NearbyOffersData],
  (state) => state.nearbyOffersFetchingStatus
);
