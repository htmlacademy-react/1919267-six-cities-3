import { AuthorizationStatus, RequestStatus } from '../const';
import { store } from '../store';
import { City } from './city';
import { Offer } from './offer';
import { Review } from './review';
import { TUser } from './user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ReviewsData = {
  reviews: Review[];
  reviewFetchingStatus: RequestStatus;
  reviewSendingStatus: RequestStatus;
};

export type UserData = {
  user: TUser | null;
  authorizationStatus: AuthorizationStatus;
  loginSendingStatus: RequestStatus;
};

export type OffersData = {
  offers: Offer[];
  activeId: undefined | string;
  currentCity: City;
  offersFetchingStatus: RequestStatus;
};

export type FavoritesData = {
  favorites: Offer[];
  favoritesFetchingStatus: RequestStatus;
};

export type OfferData = {
  activeOffer: null | Offer;
  offerFetchingStatus: RequestStatus;
};

export type NearbyOffersData = {
  nearbyOffers: Offer[];
  nearbyOffersFetchingStatus: RequestStatus;
};
