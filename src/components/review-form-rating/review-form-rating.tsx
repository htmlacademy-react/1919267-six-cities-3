import { Fragment } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ReviewFormInputs } from '../review-form/review-form';
import { RatingNumber, RatingString } from '../../types/rating';

type ReviewFormRatingProps = {
  register: UseFormRegister<ReviewFormInputs>;
  isDisabled: boolean;
};

const ratingMap: Array<{ title: RatingString; value: RatingNumber }> = [
  { title: 'perfect', value: 5 },
  { title: 'good', value: 4 },
  { title: 'not bad', value: 3 },
  { title: 'badly', value: 2 },
  { title: 'terribly', value: 1 },
];

function ReviewFormRating({ register, isDisabled }: ReviewFormRatingProps) {
  return (
    <div
      className="reviews__rating-form form__rating"
      data-testid="form-rating"
    >
      {ratingMap.map(({ title, value }) => (
        <Fragment key={value}>
          <input
            className="form__rating-input visually-hidden"
            {...register('rating', { required: true })}
            value={value}
            id={`${value}-stars`}
            type="radio"
            disabled={isDisabled}
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
  );
}

export default ReviewFormRating;
