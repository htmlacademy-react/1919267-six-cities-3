import { Host } from '../../types/host';
import { formatDate } from '../../utils/common';
import { getRatingWidth } from '../../utils/offer';

type ReviewItemProps = {
  rating: number;
  user: Omit<Host, 'id'>;
  comment: string;
  date: string;
};

function ReviewsItem({ rating, user, comment, date }: ReviewItemProps) {
  const commentDate = new Date(date);
  const dateTime = commentDate.toDateString();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateTime}>
          {formatDate(commentDate)}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
