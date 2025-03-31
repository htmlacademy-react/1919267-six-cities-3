import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthStatus } from '../const';

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
