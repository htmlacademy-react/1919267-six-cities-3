import { RequestStatus } from '../../const';
import { makeFakeFullOffer } from '../../test-mocks/test-mocks';
import { fetchNearbyOffers } from '../api-actions';
import { nearbyOffersData } from './nearby-offers-data';

describe('NearbyOffers Reducers', () => {
  const initialState = {
    nearbyOffers: [],
    nearbyOffersFetchingStatus: RequestStatus.Idle,
  };

  describe('fetchNearbyOffers', () => {
    it('sets "requestStatus" to "Loading" with "fetchNearbyOffers.pending"', () => {
      const expectedState = {
        nearbyOffers: [],
        nearbyOffersFetchingStatus: RequestStatus.Loading,
      };

      const result = nearbyOffersData.reducer(
        initialState,
        fetchNearbyOffers.pending
      );

      expect(result).toEqual(expectedState);
    });

    it('sets "nearbyOffers" to payload, "requestStatus" to "Success" with "fetchNearbyOffers.fulfilled" action', () => {
      const mockOffer = makeFakeFullOffer();
      const expectedState = {
        nearbyOffers: [mockOffer],
        nearbyOffersFetchingStatus: RequestStatus.Success,
      };

      const result = nearbyOffersData.reducer(
        initialState,
        fetchNearbyOffers.fulfilled([mockOffer], '', 'testOfferId')
      );

      expect(result).toEqual(expectedState);
    });

    it('sets "requestStatus" to "Error" with "checkAuth.rejected" action', () => {
      const expectedState = {
        nearbyOffers: [],
        nearbyOffersFetchingStatus: RequestStatus.Error,
      };

      const result = nearbyOffersData.reducer(
        initialState,
        fetchNearbyOffers.rejected(null, '', 'testOfferId')
      );

      expect(result).toEqual(expectedState);
    });
  });
});
