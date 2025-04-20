import { render, screen } from '@testing-library/react';
import ReviewFormRating from './review-form-rating';
import { useForm } from 'react-hook-form';

export type ReviewFormInputs = {
  rating: number;
  review: string;
};

describe('Component: ReviewFormRating', () => {
  const TestWrapper = () => {
    const methods = useForm<ReviewFormInputs>();
    return <ReviewFormRating isDisabled={false} register={methods.register} />;
  };

  it('renders correct city name', () => {
    render(<TestWrapper />);

    expect(screen.getByTestId('form-rating')).toBeInTheDocument();
  });
});
