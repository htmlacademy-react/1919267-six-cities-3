import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
import { setCurrentCity, setOffers } from './action';
import { MOCK_OFFERS } from '../mocks/offers';

const initialState = {
  offers: MOCK_OFFERS,
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
