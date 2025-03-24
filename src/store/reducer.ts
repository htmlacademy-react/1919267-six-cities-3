import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
import { setCurrentCity, setOffers } from './action';
import { Offer } from '../types/offer';

const initialState = {
  offers: [] as Offer[],
  currentCity: DEFAULT_CITY,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
