import { Fragment } from 'react';
import { RatingNumber, RatingString } from '../../types/rating';
import { UseFormRegister } from 'react-hook-form';
import { ReviewFormInputs } from '../review-form/review-form';

type ReviewFormRatingProps = {
  register: UseFormRegister<ReviewFormInputs>;
};

const ratingMap: Array<{ title: RatingString; value: RatingNumber }> = [
  { title: 'perfect', value: 5 },
  { title: 'good', value: 4 },
  { title: 'not bad', value: 3 },
  { title: 'badly', value: 2 },
  { title: 'terribly', value: 1 },
];

function ReviewFormRating({ register }: ReviewFormRatingProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {ratingMap.map(({ title, value }) => (
        <Fragment key={value}>
          <input
            className="form__rating-input visually-hidden"
            {...register('rating', { required: true })}
            value={value}
            id={`${value}-stars`}
            type="radio"
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
