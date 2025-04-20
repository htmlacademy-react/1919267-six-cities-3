import { render, screen } from '@testing-library/react';
import { AuthorizationStatus, RequestStatus } from '../../const';
import HeaderNavigation from './header-navigation';
import { withStore } from '../../mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';

describe('Component: HeaderNavigation', () => {
  it('renders correctly if user is logged in', () => {
    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <HeaderNavigation />
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
    expect(screen.getByTestId('user-name')).toBeInTheDocument();
  });

  it('renders correctly if user is not logged in', () => {
    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <HeaderNavigation />
      </BrowserRouter>,
      {
        USER_DATA: {
          user: null,
          authorizationStatus: AuthorizationStatus.NoAuth,
          loginSendingStatus: RequestStatus.Success,
        },
        FAVORITES_DATA: {
          favorites: [],
          favoritesFetchingStatus: RequestStatus.Success,
        },
      }
    );

    render(withStoreComponent);
    expect(screen.queryByTestId('user-name')).not.toBeInTheDocument();
  });
});
