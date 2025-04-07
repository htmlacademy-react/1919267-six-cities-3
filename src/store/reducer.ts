import { createReducer } from '@reduxjs/toolkit';
import { AuthStatus, DEFAULT_CITY } from '../const';
import {
  requireAuthorization,
  setCurrentCity,
  setCurrentOffer,
  setError,
  setLoadingStatus,
  setNearbyOffers,
  setOfferReviews,
  setOffers,
  setUserInfo,
} from './action';
import { Offer } from '../types/offer';
import { User } from '../types/user';
import { Review } from '../types/review';

const initialState = {
  offers: [] as Offer[],
  favorites: [] as Offer[],
  currentCity: DEFAULT_CITY,
  currentOffer: null as Offer | null,
  reviews: [] as Review[],
  nearbyOffers: [] as Offer[],
  authorizationStatus: AuthStatus.Unknown,
  error: null as null | string,
  isLoading: false,
  user: null as null | User,
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
    })
    .addCase(setLoadingStatus, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setOfferReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    });
});
