import { render, screen } from '@testing-library/react';
import Header from './header';
import { AuthorizationStatus, RequestStatus } from '../../const';
import { withStore } from '../../mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';

describe('Component: Header', () => {
  it('renders correctly', () => {
    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <Header />
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
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
