import { withStore } from '../../mock-components/with-store';
import { render, screen } from '@testing-library/react';
import { AuthorizationStatus, RequestStatus } from '../../const';
import OfferPage from './offer-page';
import { makeFakeFullOffer } from '../../test-mocks/test-mocks';
import { withRouterAndHelmet } from '../../mock-components/with-router';

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<OfferPage />, {
      OFFER_DATA: {
        activeOffer: makeFakeFullOffer(),
        offerFetchingStatus: RequestStatus.Idle,
      },
      NEARBY_OFFERS_DATA: {
        nearbyOffers: [],
        nearbyOffersFetchingStatus: RequestStatus.Idle,
      },
      REVIEW_DATA: {
        reviews: [],
        reviewFetchingStatus: RequestStatus.Idle,
        reviewSendingStatus: RequestStatus.Idle,
      },
      USER_DATA: {
        user: null,
        authorizationStatus: AuthorizationStatus.Unknown,
        loginSendingStatus: RequestStatus.Idle,
      },
      FAVORITES_DATA: {
        favorites: [],
        favoritesFetchingStatus: RequestStatus.Idle,
      },
    });

    const { withRouterComponent } = withRouterAndHelmet(withStoreComponent);
    render(withRouterComponent);

    expect(screen.getByTestId('offer-page')).toBeInTheDocument();
  });
});
