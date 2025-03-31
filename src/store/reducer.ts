import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, DEFAULT_CITY } from '../const';
import {
  requireAuthorization,
  setCurrentCity,
  setError,
  setOffers,
} from './action';
import { Offer } from '../types/offer';

const initialState = {
  offers: [] as Offer[],
  currentCity: DEFAULT_CITY,
  authorizationStatus: AuthStatus.Unknown,
  error: null as null | string,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
