import { AuthorizationStatus, RequestStatus } from '../const';
import { store } from '../store';
import { City } from './city';
import { Offer } from './offer';
import { Review } from './review';
import { TUser } from './user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TReviewsData = {
  reviews: Review[];
  reviewFetchingStatus: RequestStatus;
  reviewSendingStatus: RequestStatus;
};

export type TUserData = {
  user: TUser | null;
  authorizationStatus: AuthorizationStatus;
  loginSendingStatus: RequestStatus;
};

export type TOffersData = {
  offers: Offer[];
  currentCity: City;
  offersFetchingStatus: RequestStatus;
};

export type TFavoritesData = {
  favorites: Offer[];
  favoritesFetchingStatus: RequestStatus;
};

export type TOfferData = {
  activeOffer: null | Offer;
  offerFetchingStatus: RequestStatus;
};

export type TNearbyOffersData = {
  nearbyOffers: Offer[];
  nearbyOffersFetchingStatus: RequestStatus;
};
