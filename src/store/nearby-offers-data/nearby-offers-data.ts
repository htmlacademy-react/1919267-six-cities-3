import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { TNearbyOffersData } from '../../types/state';
import { fetchNearbyOffers } from '../api-actions';

export const nearbyOffersData = createSlice({
  name: NameSpace.NearbyOffersData,
  initialState: {
    nearbyOffers: [],
    nearbyOffersFetchingStatus: RequestStatus.Idle,
  } as TNearbyOffersData,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.nearbyOffersFetchingStatus = RequestStatus.Loading;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffersFetchingStatus = RequestStatus.Success;
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.nearbyOffersFetchingStatus = RequestStatus.Error;
      });
  }
});
