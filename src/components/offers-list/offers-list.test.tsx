import { render, screen } from '@testing-library/react';
import OffersList from './offers-list';
import { makeFakeFullOffer } from '../../test-mocks/test-mocks';
import { withStore } from '../../mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';
import { AuthorizationStatus, RequestStatus } from '../../const';

describe('Component: OffersList', () => {
  it('renders correctly', () => {
    const mockOffer = makeFakeFullOffer();

    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <OffersList currentOffers={[mockOffer]} />
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

    expect(screen.getByText(mockOffer.title)).toBeInTheDocument();
  });
});
