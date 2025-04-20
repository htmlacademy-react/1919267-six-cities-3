import { render, screen } from '@testing-library/react';
import { AuthorizationStatus, RequestStatus } from '../../const';
import ReviewsList from './reviews-list';
import { withStore } from '../../mock-components/with-store';

describe('Component: ReviewsList', () => {
  const expectedText = /Reviews/i;

  it('renders', () => {
    const { withStoreComponent } = withStore(
      <ReviewsList offerId="" reviews={[]} />,
      {
        REVIEW_DATA: {
          reviews: [],
          reviewFetchingStatus: RequestStatus.Success,
          reviewSendingStatus: RequestStatus.Idle,
        },
        USER_DATA: {
          user: null,
          authorizationStatus: AuthorizationStatus.Auth,
          loginSendingStatus: RequestStatus.Success,
        },
      }
    );

    render(withStoreComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
