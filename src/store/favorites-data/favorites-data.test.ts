import { FavoritesStatus, RequestStatus } from '../../const';
import { makeFakeFullOffer } from '../../test-mocks/test-mocks';
import { FavoritesData } from '../../types/state';
import { fetchFavoriteOffers, updateFavoriteStatus } from '../api-actions';
import { favoritesData } from './favorites-data';

describe('Favorites data Reducers', () => {
  const initialState: FavoritesData = {
    favorites: [],
    favoritesFetchingStatus: RequestStatus.Idle,
  };

  describe('fetchFavorites', () => {
    it('sets "requestStatus" to "Loading" with "fetchFavoriteOffers.pending"', () => {
      const expectedState = {
        favorites: [],
        favoritesFetchingStatus: RequestStatus.Loading,
      };

      const result = favoritesData.reducer(
        initialState,
        fetchFavoriteOffers.pending
      );

      expect(result).toEqual(expectedState);
    });

    it('sets "favorites" to payload, "requestStatus" to "Success" with "fetchFavoriteOffers.fulfilled" action', () => {
      const mockFavoriteOffer = makeFakeFullOffer();
      const expectedState = {
        favorites: [mockFavoriteOffer],
        favoritesFetchingStatus: RequestStatus.Success,
      };

      const result = favoritesData.reducer(
        initialState,
        fetchFavoriteOffers.fulfilled([mockFavoriteOffer], '', undefined)
      );

      expect(result).toEqual(expectedState);
    });

    it('sets "requestStatus" to "Error" with "checkAuth.rejected" action', () => {
      const expectedState = {
        favorites: [],
        favoritesFetchingStatus: RequestStatus.Error,
      };

      const result = favoritesData.reducer(
        initialState,
        fetchFavoriteOffers.rejected(null, '', undefined)
      );

      expect(result).toEqual(expectedState);
    });
  });

  describe('changeFavorite', () => {
    it('sets "requestStatus" to "Loading" with "updateFavoriteStatus.pending"', () => {
      const expectedState = {
        favorites: [],
        favoritesFetchingStatus: RequestStatus.Loading,
      };

      const result = favoritesData.reducer(
        initialState,
        updateFavoriteStatus.pending
      );

      expect(result).toEqual(expectedState);
    });

    it('adds offer to "favorites" if the status is "added" with "updateFavoriteStatus.fulfilled" action', () => {
      const mockedFavoriteOffer = makeFakeFullOffer();
      const expectedState = {
        favorites: [mockedFavoriteOffer],
        favoritesFetchingStatus: RequestStatus.Success,
      };

      const result = favoritesData.reducer(
        initialState,
        updateFavoriteStatus.fulfilled(
          { offer: mockedFavoriteOffer, status: FavoritesStatus.Added },
          '',
          {
            id: 'testId',
            status: Number(FavoritesStatus.Added),
          }
        )
      );
      expect(result).toEqual(expectedState);
    });

    it('removes offer from "favorites" if the status is "removed" with "updateFavoriteStatus.fulfilled" action', () => {
      const mockedFavoriteOffer = makeFakeFullOffer();
      const mockedOfferToRemove = { ...makeFakeFullOffer(), id: 'testId' };
      const mockedInitialState = {
        favorites: [mockedFavoriteOffer, mockedOfferToRemove],
        favoritesFetchingStatus: RequestStatus.Success,
      };
      const expectedState = {
        favorites: [mockedFavoriteOffer],
        favoritesFetchingStatus: RequestStatus.Success,
      };

      const result = favoritesData.reducer(
        mockedInitialState,
        updateFavoriteStatus.fulfilled(
          { offer: mockedOfferToRemove, status: FavoritesStatus.Removed },
          '',
          {
            id: 'testId',
            status: FavoritesStatus.Removed,
          }
        )
      );
      expect(result).toEqual(expectedState);
    });

    it('sets "requestStatus" to "Error" "updateFavoriteStatus.rejected" action', () => {
      const expectedState = {
        favorites: [],
        favoritesFetchingStatus: RequestStatus.Error,
      };

      const result = favoritesData.reducer(
        initialState,
        updateFavoriteStatus.rejected(null, '', {
          id: 'testId',
          status: FavoritesStatus.Added,
        })
      );

      expect(result).toEqual(expectedState);
    });
  });
});
