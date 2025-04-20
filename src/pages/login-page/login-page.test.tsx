import { render, screen } from '@testing-library/react';
import { withStore } from '../../mock-components/with-store';
import LoginPage from './login-page';
import { AuthorizationStatus, RequestStatus } from '../../const';
import { withRouterAndHelmet } from '../../mock-components/with-router';

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<LoginPage />, {
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

    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });
});
