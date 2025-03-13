import { AuthStatus } from '../../const';
import { Review } from '../../types/review';
import ReviewForm from '../review-form/review-form';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Review[];
  authorizationStatus: AuthStatus;
};

function ReviewsList({ reviews, authorizationStatus }: ReviewsListProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((item: Review) => (
          <ReviewsItem key={item.id} {...item} />
        ))}
      </ul>
      {authorizationStatus === AuthStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default ReviewsList;
