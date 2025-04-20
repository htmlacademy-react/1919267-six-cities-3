import { CityMap, RequestStatus } from '../../const';
import { makeFakeFullOffer } from '../../test-mocks/test-mocks';
import { OffersData } from '../../types/state';
import { fetchOffers } from '../api-actions';
import { offersData } from './offers-data';

describe('Offers Reducers', () => {
  const initialState: OffersData = {
    offers: [],
    activeId: undefined,
    currentCity: CityMap.Paris,
    offersFetchingStatus: RequestStatus.Idle,
  };

  describe('fetchOffers', () => {
    it('sets "requestStatus" to "Loading" with "fetchOffers.pending"', () => {
      const expectedState = {
        offers: [],
        activeId: undefined,
        currentCity: CityMap.Paris,
        offersFetchingStatus: RequestStatus.Loading,
      };

      const result = offersData.reducer(initialState, fetchOffers.pending);

      expect(result).toEqual(expectedState);
    });

    it('sets "offers" to payload, "requestStatus" to "Success" with "fetchOffers.fulfilled" action', () => {
      const mockOffer = makeFakeFullOffer();
      const expectedState = {
        offers: [mockOffer],
        activeId: undefined,
        currentCity: CityMap.Paris,
        offersFetchingStatus: RequestStatus.Success,
      };

      const result = offersData.reducer(
        initialState,
        fetchOffers.fulfilled([mockOffer], '', undefined)
      );

      expect(result).toEqual(expectedState);
    });

    it('sets "requestStatus" to "Error" with "checkAuth.rejected" action', () => {
      const expectedState = {
        offers: [],
        activeId: undefined,
        currentCity: CityMap.Paris,
        offersFetchingStatus: RequestStatus.Error,
      };

      const result = offersData.reducer(
        initialState,
        fetchOffers.rejected(null, '', undefined)
      );

      expect(result).toEqual(expectedState);
    });
  });
});
