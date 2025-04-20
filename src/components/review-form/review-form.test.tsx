import { render, screen } from '@testing-library/react';
import ReviewForm from './review-form';
import { RequestStatus } from '../../const';
import { withStore } from '../../mock-components/with-store';

describe('Component: ReviewForm', () => {
  const expectedText = /Your review/i;

  it('renders', () => {
    const { withStoreComponent } = withStore(<ReviewForm offerId="" />, {
      REVIEW_DATA: {
        reviews: [],
        reviewFetchingStatus: RequestStatus.Idle,
        reviewSendingStatus: RequestStatus.Idle,
      },
    });

    render(withStoreComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
