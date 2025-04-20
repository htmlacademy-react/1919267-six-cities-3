/* eslint-disable indent */
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { OfferData } from '../../types/state';
import { fetchActiveOffer, updateFavoriteStatus } from '../api-actions';

const initialState: OfferData = {
  activeOffer: null,
  offerFetchingStatus: RequestStatus.Idle,
};

export const offerData = createSlice({
  name: NameSpace.OfferData,
  initialState,
  reducers: {
    dropActiveOffer(state) {
      state.activeOffer = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchActiveOffer.pending, (state) => {
        state.offerFetchingStatus = RequestStatus.Loading;
      })
      .addCase(fetchActiveOffer.fulfilled, (state, action) => {
        state.offerFetchingStatus = RequestStatus.Success;
        state.activeOffer = action.payload;
      })
      .addCase(fetchActiveOffer.rejected, (state) => {
        state.offerFetchingStatus = RequestStatus.Error;
      })
      .addCase(updateFavoriteStatus.fulfilled, (state, action) => {
        state.activeOffer =
          state.activeOffer?.id === action.payload.offer.id
            ? {
                ...state.activeOffer,
                isFavorite: !state.activeOffer?.isFavorite,
              }
            : state.activeOffer;
      });
  },
});

export const { dropActiveOffer } = offerData.actions;
