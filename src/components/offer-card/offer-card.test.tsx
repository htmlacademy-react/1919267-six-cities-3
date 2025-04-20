import { render, screen } from '@testing-library/react';
import OfferCard from './offer-card';
import { AuthorizationStatus, RequestStatus } from '../../const';
import { withStore } from '../../mock-components/with-store';
import { makeFakeFullOffer } from '../../test-mocks/test-mocks';
import { BrowserRouter } from 'react-router-dom';

describe('Component: OfferCard', () => {
  it('renders', () => {
    const mockOffer = makeFakeFullOffer();
    const { title } = mockOffer;

    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <OfferCard
          offer={mockOffer}
          block="cities"
          size="small"
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        />
      </BrowserRouter>,
      {
        USER_DATA: {
          user: null,
          authorizationStatus: AuthorizationStatus.Auth,
          loginSendingStatus: RequestStatus.Success,
        },
        FAVORITES_DATA: {
          favorites: [],
          favoritesFetchingStatus: RequestStatus.Success,
        },
      }
    );

    render(withStoreComponent);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
