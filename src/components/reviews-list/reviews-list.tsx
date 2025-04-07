import { useEffect } from 'react';
import { AuthStatus, MAX_SHOWN_REVIEWS } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import ReviewForm from '../review-form/review-form';
import ReviewsItem from '../reviews-item/reviews-item';
import { fetchReviews } from '../../store/api-actions';

type ReviewsListProps = {
  offerId: Offer['id'];
};

function ReviewsList({ offerId }: ReviewsListProps) {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector((state) => state.reviews);
  const sortedReviews = reviews.toSorted(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const reviewsToShow = sortedReviews.slice(0, MAX_SHOWN_REVIEWS);
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  useEffect(() => {
    dispatch(fetchReviews(offerId));
  }, [dispatch, offerId]);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">
          {reviews.length > 10
            ? `${MAX_SHOWN_REVIEWS} of ${reviews.length}`
            : reviews.length}
        </span>
      </h2>
      <ul className="reviews__list">
        {reviewsToShow.map((item: Review) => (
          <ReviewsItem key={item.id} {...item} />
        ))}
      </ul>
      {authorizationStatus === AuthStatus.Auth && (
        <ReviewForm offerId={offerId} />
      )}
    </section>
  );
}

export default ReviewsList;
