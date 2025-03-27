import { MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH } from '../../const';
import ReviewFormRating from '../review-form-rating/review-form-rating';
import { SubmitHandler, useForm } from 'react-hook-form';

export type ReviewFormInputs = {
  rating: number;
  review: string;
};

function ReviewForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<ReviewFormInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<ReviewFormInputs> = (
    data: ReviewFormInputs,
    event?: React.BaseSyntheticEvent
  ) => {
    event?.preventDefault();
    // eslint-disable-next-line no-console
    console.log(data);
    reset();
  };

  return (
    <form
      className="reviews__form form"
      method="post"
      onSubmit={(event) => void handleSubmit(onSubmit)(event)}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <ReviewFormRating register={register} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        {...register('review', {
          required: true,
          minLength: MIN_COMMENT_LENGTH,
          maxLength: MAX_COMMENT_LENGTH,
        })}
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
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
