import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectReviews = (state: State) => state[NameSpace.ReviewData].reviews;
export const selectReviewsFetchingStatus = (state: State) => state[NameSpace.ReviewData].reviewFetchingStatus;
export const selectReviewsSendingStatus = (state: State) => state[NameSpace.ReviewData].reviewSendingStatus;
