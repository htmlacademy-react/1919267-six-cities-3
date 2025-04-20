import { RequestStatus } from '../../const';
import { makeFakeReview } from '../../test-mocks/test-mocks';
import { ReviewsData } from '../../types/state';
import { fetchReviews } from '../api-actions';
import { reviewsData } from './reviews-data';

describe('Reviews Reducers', () => {
  const initialState: ReviewsData = {
    reviews: [],
    reviewFetchingStatus: RequestStatus.Idle,
    reviewSendingStatus: RequestStatus.Idle,
  };

  describe('fetchReviews', () => {
    it('sets "requestStatus" to "Loading" with "fetchReviews.pending"', () => {
      const expectedState = {
        reviews: [],
        reviewFetchingStatus: RequestStatus.Loading,
        reviewSendingStatus: RequestStatus.Idle,
      };

      const result = reviewsData.reducer(initialState, fetchReviews.pending);

      expect(result).toEqual(expectedState);
    });

    it('sets "reviews" to payload, "requestStatus" to "Success" with "fetchReviews.fulfilled" action', () => {
      const mockedReview = makeFakeReview();
      const expectedState = {
        reviews: [mockedReview],
        reviewFetchingStatus: RequestStatus.Success,
        reviewSendingStatus: RequestStatus.Idle,
      };

      const result = reviewsData.reducer(
        initialState,
        fetchReviews.fulfilled([mockedReview], '', 'testOfferId')
      );

      expect(result).toEqual(expectedState);
    });

    it('sets "requestStatus" to "Error" with "checkAuth.rejected" action', () => {
      const expectedState = {
        reviews: [],
        reviewFetchingStatus: RequestStatus.Error,
        reviewSendingStatus: RequestStatus.Idle,
      };

      const result = reviewsData.reducer(
        initialState,
        fetchReviews.rejected(null, '', 'testOfferId')
      );

      expect(result).toEqual(expectedState);
    });
  });
});
