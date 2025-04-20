import { RequestStatus } from '../../const';
import { makeFakeFullOffer } from '../../test-mocks/test-mocks';
import { OfferData } from '../../types/state';
import { fetchActiveOffer } from '../api-actions';
import { offerData } from './offer-data';

describe('Favorites Reducers', () => {
  const initialState: OfferData = {
    activeOffer: null,
    offerFetchingStatus: RequestStatus.Idle,
  };

  describe('fetchActiveOffer', () => {
    it('sets "requestStatus" to "Loading" with "fetchActiveOffer.pending"', () => {
      const expectedState = {
        activeOffer: null,
        offerFetchingStatus: RequestStatus.Loading,
      };

      const result = offerData.reducer(initialState, fetchActiveOffer.pending);

      expect(result).toEqual(expectedState);
    });

    it('sets "offer" to payload, "requestStatus" to "Success" with "fetchActiveOffer.fulfilled" action', () => {
      const mockedOffer = makeFakeFullOffer();
      const expectedState = {
        activeOffer: mockedOffer,
        offerFetchingStatus: RequestStatus.Success,
      };

      const result = offerData.reducer(
        initialState,
        fetchActiveOffer.fulfilled(mockedOffer, '', 'testOfferId')
      );

      expect(result).toEqual(expectedState);
    });

    it('sets "requestStatus" to "Error" with "fetchActiveOffer.rejected" action', () => {
      const expectedState = {
        activeOffer: null,
        offerFetchingStatus: RequestStatus.Error,
      };

      const result = offerData.reducer(
        initialState,
        fetchActiveOffer.rejected(null, '', 'testOfferId')
      );

      expect(result).toEqual(expectedState);
    });
  });
});
