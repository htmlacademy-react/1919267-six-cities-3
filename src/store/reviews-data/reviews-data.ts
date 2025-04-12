import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { TReviewsData } from '../../types/state';
import { fetchReviews, sendReview } from '../api-actions';

const initialState: TReviewsData = {
  reviews: [],
  reviewFetchingStatus: RequestStatus.Idle,
  reviewSendingStatus: RequestStatus.Idle
};

export const reviewsData = createSlice({
  name: NameSpace.ReviewData,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.reviewFetchingStatus = RequestStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviewFetchingStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviewFetchingStatus = RequestStatus.Error;
      })
      .addCase(sendReview.pending, (state) => {
        state.reviewSendingStatus = RequestStatus.Loading;
      })
      .addCase(sendReview.fulfilled, (state, action) => {
        state.reviewSendingStatus = RequestStatus.Success;
        state.reviews.push(action.payload);
      })
      .addCase(sendReview.rejected, (state) => {
        state.reviewSendingStatus = RequestStatus.Error;
      });
  }
});
