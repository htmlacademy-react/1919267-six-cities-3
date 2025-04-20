import { AppRoute, AuthorizationStatus, RequestStatus } from '../../const';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ProtectedRoute from './protected-route';
import { withStore } from '../../mock-components/with-store';
import { makeFakeUser } from '../../test-mocks/test-mocks';

describe('Component: ProtectedRoute', () => {
  const routesConfig = [
    {
      path: AppRoute.Root,
      element: <span>Main</span>,
    },
    {
      path: AppRoute.Favorites,
      element: (
        <ProtectedRoute>
          <span>Favorites</span>
        </ProtectedRoute>
      ),
    },
    {
      path: AppRoute.Login,
      element: (
        <ProtectedRoute publicRoute>
          <span>Login</span>
        </ProtectedRoute>
      ),
    },
  ];

  it('redirects to Main page, when logged in user visits Login page', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [AppRoute.Login],
    });

    const { withStoreComponent } = withStore(
      <RouterProvider router={router} />,
      {
        USER_DATA: {
          user: makeFakeUser(),
          authorizationStatus: AuthorizationStatus.Auth,
          loginSendingStatus: RequestStatus.Success,
        },
      }
    );
    render(withStoreComponent);
    expect(screen.getByText('Main')).toBeInTheDocument();
  });

  it('renders Login page, when user is not authorized', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [AppRoute.Login],
    });

    const { withStoreComponent } = withStore(
      <RouterProvider router={router} />,
      {
        USER_DATA: {
          user: null,
          authorizationStatus: AuthorizationStatus.NoAuth,
          loginSendingStatus: RequestStatus.Success,
        },
      }
    );
    render(withStoreComponent);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('redirects to Login page, when not authorized user visits Favorites page', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [AppRoute.Favorites],
    });

    const { withStoreComponent } = withStore(
      <RouterProvider router={router} />,
      {
        USER_DATA: {
          user: null,
          authorizationStatus: AuthorizationStatus.NoAuth,
          loginSendingStatus: RequestStatus.Success,
        },
      }
    );
    render(withStoreComponent);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders Favorites page, when user is authorized', () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: [AppRoute.Favorites],
    });

    const { withStoreComponent } = withStore(
      <RouterProvider router={router} />,
      {
        USER_DATA: {
          user: makeFakeUser(),
          authorizationStatus: AuthorizationStatus.Auth,
          loginSendingStatus: RequestStatus.Success,
        },
      }
    );
    render(withStoreComponent);
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });
});
