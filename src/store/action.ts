import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthStatus, AppRoute } from '../const';
import { User } from '../types/user';
import { Review } from '../types/review';

export const setCurrentCity = createAction(
  'offers/setCurrentCity',
  (city: City) => ({
    payload: city,
  })
);

export const setOffers = createAction(
  'offers/setOffers',
  (offers: Offer[]) => ({
    payload: offers,
  })
);

export const requireAuthorization = createAction(
  'user/requireAuthorization',
  (authorizationStatus: AuthStatus) => ({
    payload: authorizationStatus,
  })
);

export const setError = createAction(
  'app/setError',
  (error: string | null) => ({
    payload: error,
  })
);

export const setLoadingStatus = createAction(
  'app/setLoadingStatus',
  (loadingStatus: boolean) => ({
    payload: loadingStatus,
  })
);

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const setUserInfo = createAction(
  'user/setUserInfo',
  (userData: User | null) => ({
    payload: userData,
  })
);

export const setCurrentOffer = createAction<Offer>('offer/setCurrentOffer');
export const setOfferReviews = createAction<Review[]>('offer/setOfferReviews');
export const setNearbyOffers = createAction<Offer[]>('offer/setNearbyOffers');
