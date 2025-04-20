import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectFavorites = createSelector(
  (state: State) => state[NameSpace.FavoritesData],
  (state) => state.favorites
);
export const selectFetchingFavoritesStatus = createSelector(
  (state: State) => state[NameSpace.FavoritesData],
  (state) => state.favoritesFetchingStatus
);
