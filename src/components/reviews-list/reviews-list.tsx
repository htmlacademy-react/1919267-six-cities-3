import { AuthorizationStatus, MAX_SHOWN_REVIEWS } from '../../const';
import { useAppSelector } from '../../hooks';
import { Review } from '../../types/review';
import ReviewForm from '../review-form/review-form';
import { selectAuthorizationStatus } from '../../store/user-data/selectors';
import ReviewItem from '../review-item/review-item';
import { Offer } from '../../types/offer';

type ReviewsListProps = {
  offerId: Offer['id'];
  reviews: Review[];
};

function ReviewsList({ offerId, reviews }: ReviewsListProps) {
  const sortedReviews = [...reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const reviewsToShow = sortedReviews.slice(0, MAX_SHOWN_REVIEWS);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

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
          <ReviewItem key={item.id} {...item} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && (
        <ReviewForm offerId={offerId} />
      )}
    </section>
  );
}

export default ReviewsList;
