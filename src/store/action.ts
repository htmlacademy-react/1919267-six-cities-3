import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

export const setCurrentCity = createAction(
  'offers/setCurrentCity',
  (city: City) => ({
    payload: city,
  }),
);

export const setOffers = createAction(
  'offers/setOffers',
  (offers: Offer[]) => ({
    payload: offers,
  }),
);
