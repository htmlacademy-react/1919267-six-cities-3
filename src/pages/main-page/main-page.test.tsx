import { withStore } from '../../mock-components/with-store';
import { render, screen } from '@testing-library/react';
import { AuthorizationStatus, CityMap, RequestStatus } from '../../const';
import MainPage from './main-page';
import { withRouterAndHelmet } from '../../mock-components/with-router';

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<MainPage />, {
      FAVORITES_DATA: {
        favorites: [],
        favoritesFetchingStatus: RequestStatus.Idle,
      },
      USER_DATA: {
        user: null,
        authorizationStatus: AuthorizationStatus.Unknown,
        loginSendingStatus: RequestStatus.Idle,
      },
      OFFERS_DATA: {
        offers: [],
        activeId: undefined,
        currentCity: CityMap.Paris,
        offersFetchingStatus: RequestStatus.Idle,
      },
    });

    const { withRouterComponent } = withRouterAndHelmet(withStoreComponent);
    render(withRouterComponent);

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
