import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectActiveOffer = (state: State) =>
  state[NameSpace.OfferData].activeOffer;
export const selectOfferFetchingStatus = (state: State) =>
  state[NameSpace.OfferData].offerFetchingStatus;
export const selectActiveOfferId = (state: State) =>
  state[NameSpace.OfferData].activeOffer?.id;
