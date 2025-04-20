import { BrowserRouter } from 'react-router-dom';
import { AuthorizationStatus, RequestStatus } from '../../const';
import { render, screen } from '@testing-library/react';
import BookmarkButton from './bookmark-button';
import { withStore } from '../../mock-components/with-store';
import { makeFakeFullOffer } from '../../test-mocks/test-mocks';

describe('Component: BookmarkButton', () => {
  it('renders correct label when user is logged in', () => {
    const expectedText = /In bookmarks/i;
    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <BookmarkButton id="" block="offer" size="small" isFavorite />
      </BrowserRouter>,
      {
        USER_DATA: {
          user: null,
          authorizationStatus: AuthorizationStatus.Auth,
          loginSendingStatus: RequestStatus.Success,
        },
        FAVORITES_DATA: {
          favorites: [makeFakeFullOffer()],
          favoritesFetchingStatus: RequestStatus.Success,
        },
      }
    );
    render(withStoreComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('renders correct label when user is not logged in', () => {
    const expectedText = /To bookmarks/i;
    const { withStoreComponent } = withStore(
      <BrowserRouter>
        <BookmarkButton id="" block="offer" size="small" isFavorite={false} />
      </BrowserRouter>,
      {
        USER_DATA: {
          user: null,
          authorizationStatus: AuthorizationStatus.Auth,
          loginSendingStatus: RequestStatus.Success,
        },
        FAVORITES_DATA: {
          favorites: [],
          favoritesFetchingStatus: RequestStatus.Idle,
        },
      }
    );
    render(withStoreComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
