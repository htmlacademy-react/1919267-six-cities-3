import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityMap, NameSpace, RequestStatus } from '../../const';
import { fetchOffers, updateFavoriteStatus } from '../api-actions';
import { OffersData } from '../../types/state';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';

const initialState: OffersData = {
  offers: [],
  activeId: undefined,
  currentCity: CityMap.Paris,
  offersFetchingStatus: RequestStatus.Idle,
};

export const offersData = createSlice({
  name: NameSpace.OffersData,
  initialState,
  reducers: {
    setCurrentCity(state, action: PayloadAction<City>) {
      state.currentCity = action.payload;
    },
    setActiveId(state, action: PayloadAction<Offer['id'] | undefined>) {
      state.activeId = action.payload;
    },
  },
  extraReducers(builder) {
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
          isFavorite:
            item.id === action.payload.offer.id
              ? Boolean(action.payload.status)
              : item.isFavorite,
        }));
      });
  },
});

export const { setCurrentCity, setActiveId } = offersData.actions;
