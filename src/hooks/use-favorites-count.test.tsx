import { render, renderHook } from '@testing-library/react';
import { AuthorizationStatus, RequestStatus } from '../const';
import {
  extractActionTypes,
  makeFakeFullOffer,
} from '../test-mocks/test-mocks';
import { useFavoritesCount } from './use-favorites-count';
import { withStore } from '../mock-components/with-store';
import { fetchFavoriteOffers } from '../store/api-actions';
import HeaderNavigation from '../components/header-navigation/header-navigation';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';

window.localStorage.setItem('six-cities-token', 'fake_token_123');

describe('Hook: useFavoritesCount', () => {
  it('dispatches "fetchFavoriteOffers" action if request status is "Idle"', () => {
    const { withStoreComponent, mockStore } = withStore(
      <BrowserRouter>
        <HeaderNavigation />
      </BrowserRouter>,
      {
        FAVORITES_DATA: {
          favorites: [],
          favoritesFetchingStatus: RequestStatus.Idle,
        },
        USER_DATA: {
          user: null,
          authorizationStatus: AuthorizationStatus.Auth,
          loginSendingStatus: RequestStatus.Success,
        },
      }
    );

    const wrapper = ({ children }: PropsWithChildren) => (
      <Provider store={mockStore}>{children}</Provider>
    );
    renderHook(() => useFavoritesCount(), { wrapper });

    const actions = extractActionTypes(mockStore.getActions());

    render(withStoreComponent);
    expect(actions[0]).toEqual(fetchFavoriteOffers.pending.type);
  });

  it('does not dispatch "fetchFavoriteOffers" action if request status is not "Idle"', () => {
    const { mockStore } = withStore(<HeaderNavigation />, {
      FAVORITES_DATA: {
        favorites: [],
        favoritesFetchingStatus: RequestStatus.Loading,
      },
    });
    const wrapper = ({ children }: PropsWithChildren) => (
      <Provider store={mockStore}>{children}</Provider>
    );
    renderHook(() => useFavoritesCount(), { wrapper });

    const actions = extractActionTypes(mockStore.getActions());
    expect(actions).not.toEqual([fetchFavoriteOffers.pending.type]);
  });

  it('returns favorites count', () => {
    const firstFavorite = makeFakeFullOffer();
    const secondFavorite = makeFakeFullOffer();
    const { mockStore } = withStore(
      <BrowserRouter>
        <HeaderNavigation />
      </BrowserRouter>,
      {
        FAVORITES_DATA: {
          favorites: [firstFavorite, secondFavorite],
          favoritesFetchingStatus: RequestStatus.Idle,
        },
        USER_DATA: {
          user: null,
          authorizationStatus: AuthorizationStatus.Auth,
          loginSendingStatus: RequestStatus.Success,
        },
      }
    );
    const wrapper = ({ children }: PropsWithChildren) => (
      <Provider store={mockStore}>{children}</Provider>
    );
    const { result } = renderHook(() => useFavoritesCount(), { wrapper });

    expect(result.current).toBe(2);
  });

  afterAll(() => {
    window.localStorage.clear();
  });
});
