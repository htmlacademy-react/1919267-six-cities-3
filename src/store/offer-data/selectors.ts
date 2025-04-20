import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectActiveOffer = createSelector(
  (state: State) => state[NameSpace.OfferData],
  (state) => state.activeOffer
);
export const selectOfferFetchingStatus = createSelector(
  (state: State) => state[NameSpace.OfferData],
  (state) => state.offerFetchingStatus
);
export const selectActiveOfferId = createSelector(
  (state: State) => state[NameSpace.OfferData],
  (state) => state.activeOffer?.id
);
