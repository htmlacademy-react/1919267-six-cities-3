import { withStore } from '../../mock-components/with-store';
import FavoritesPage from './favorites-page';
import { render, screen } from '@testing-library/react';
import { AuthorizationStatus, RequestStatus } from '../../const';
import { withRouterAndHelmet } from '../../mock-components/with-router';

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<FavoritesPage />, {
      FAVORITES_DATA: {
        favorites: [],
        favoritesFetchingStatus: RequestStatus.Idle,
      },
      USER_DATA: {
        user: null,
        authorizationStatus: AuthorizationStatus.Unknown,
        loginSendingStatus: RequestStatus.Idle,
      },
    });

    const { withRouterComponent } = withRouterAndHelmet(withStoreComponent);
    render(withRouterComponent);

    expect(screen.getByTestId('favorites-page')).toBeInTheDocument();
  });
});
