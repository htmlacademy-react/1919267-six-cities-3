import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityMap, NameSpace, RequestStatus } from '../../const';
import { fetchOffers, updateFavoriteStatus } from '../api-actions';
import { TOffersData } from '../../types/state';
import { City } from '../../types/city';

const initialState: TOffersData = {
  offers: [],
  currentCity: CityMap.Paris,
  offersFetchingStatus: RequestStatus.Idle
};

export const offersData = createSlice({
  name: NameSpace.OffersData,
  initialState,
  reducers: {
    setCurrentCity(state, action: PayloadAction<City>) {
      state.currentCity = action.payload;
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.offersFetchingStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offersFetchingStatus = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offersFetchingStatus = RequestStatus.Error;
      })
      .addCase(updateFavoriteStatus.fulfilled, (state, action) => {
        state.offers.map((item) => ({
          ...item,
          isFavorite: item.id === action.payload.id
            ? action.payload.isFavorite
            : item.isFavorite
        }));
      });
  }
});

export const {setCurrentCity} = offersData.actions;
