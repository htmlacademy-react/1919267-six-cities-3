import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { TOfferData } from '../../types/state';
import { fetchActiveOffer } from '../api-actions';

const initialState: TOfferData = {
  activeOffer: null,
  offerFetchingStatus: RequestStatus.Idle
};

export const offerData = createSlice({
  name: NameSpace.OfferData,
  initialState,
  reducers: {
    dropActiveOffer (state) {
      state.activeOffer = null;
    },
  },
  extraReducers (builder) {
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
      });
  }
});

export const {dropActiveOffer} = offerData.actions;
