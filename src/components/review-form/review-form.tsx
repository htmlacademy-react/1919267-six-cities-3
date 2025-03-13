import { ChangeEvent, Fragment, ReactEventHandler, useState } from 'react';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH } from '../../const';
import { RatingNumber, RatingString } from '../../types/rating';

const ratingMap: Array<{ title: RatingString; value: RatingNumber }> = [
  { title: 'excellent', value: 5 },
  { title: 'good', value: 4 },
  { title: 'not bad', value: 3 },
  { title: 'bad', value: 2 },
  { title: 'terrible', value: 1 },
];

function ReviewForm() {
  const [comment, setComment] = useState<{
    rating: 0 | RatingNumber;
    review: string;
  }>({ rating: 0, review: '' });

  const isValid =
    comment.review.length >= MIN_COMMENT_LENGTH &&
    comment.review.length <= MAX_COMMENT_LENGTH &&
    comment.rating !== 0;

  const handleChange: ReactEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.currentTarget;
    setComment({ ...comment, [name]: value });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratingMap.map(({ title, value }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChange}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={comment.review}
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {MIN_COMMENT_LENGTH} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
