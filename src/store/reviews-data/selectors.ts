import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectReviews = createSelector(
  (state: State) => state[NameSpace.ReviewData],
  (state) => state.reviews
);
export const selectReviewsFetchingStatus = createSelector(
  (state: State) => state[NameSpace.ReviewData],
  (state) => state.reviewFetchingStatus
);
export const selectReviewsSendingStatus = createSelector(
  (state: State) => state[NameSpace.ReviewData],
  (state) => state.reviewSendingStatus
);
