import { render, screen } from '@testing-library/react';
import { makeFakeReview } from '../../test-mocks/test-mocks';
import ReviewItem from './review-item';

describe('Component: ReviewItem', () => {
  const mockReview = makeFakeReview();

  it('renders', () => {
    render(
      <ReviewItem
        rating={mockReview.rating}
        user={mockReview.user}
        comment={mockReview.comment}
        date={mockReview.date}
      />
    );

    expect(screen.getByText(mockReview.comment)).toBeInTheDocument();
  });
});
