import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectFavorites = (state: State) => state[NameSpace.FavoritesData].favorites;
export const selectFetchingFavoritesStatus = (state: State) => state[NameSpace.FavoritesData].favoritesFetchingStatus;
