import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectCurrentCity = (state: State) => state[NameSpace.OffersData].currentCity;
export const selectOffers = (state: State) => state[NameSpace.OffersData].offers;
export const selectOffersFetchingStatus = (state: State) => state[NameSpace.OffersData].offersFetchingStatus;
