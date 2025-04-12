import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectNearbyOffers = (state: State) => state[NameSpace.NearbyOffersData].nearbyOffers;
export const selectNearbyOffersFetchingStatus = (state: State) => state[NameSpace.NearbyOffersData].nearbyOffersFetchingStatus;
