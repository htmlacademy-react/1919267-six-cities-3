import { Fragment } from 'react';
import { RatingNumber, RatingString } from '../../types/rating';

type ReviewFormRatingProps = {
  handleChange: (value: RatingNumber) => void;
};

const ratingMap: Array<{ title: RatingString; value: RatingNumber }> = [
  { title: 'excellent', value: 5 },
  { title: 'good', value: 4 },
  { title: 'not bad', value: 3 },
  { title: 'bad', value: 2 },
  { title: 'terrible', value: 1 },
];

function ReviewFormRating({ handleChange }: ReviewFormRatingProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {ratingMap.map(({ title, value }) => (
        <Fragment key={value}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={value}
            id={`${value}-stars`}
            type="radio"
            onChange={() => handleChange(value)}
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
