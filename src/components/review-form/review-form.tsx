import { ChangeEvent, useState } from 'react';
import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH } from '../../const';
import { RatingNumber } from '../../types/rating';
import ReviewFormRating from '../review-form-rating/review-form-rating';

function ReviewForm() {
  const [comment, setComment] = useState<{
    rating: 0 | RatingNumber;
    review: string;
  }>({ rating: 0, review: '' });

  const isValid =
    comment.review.length >= MIN_COMMENT_LENGTH &&
    comment.review.length <= MAX_COMMENT_LENGTH &&
    comment.rating !== 0;

  const handleRatingChange = (value: RatingNumber) => {
    setComment({ ...comment, rating: value });
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment({ ...comment, review: evt.currentTarget.value });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewFormRating handleChange={handleRatingChange} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={comment.review}
        onChange={handleTextareaChange}
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
