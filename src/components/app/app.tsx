import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute, AuthStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Review } from '../../types/review';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  reviews: Review[];
};

function App({ reviews }: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.root}
            element={<MainPage authorizationStatus={AuthStatus.Auth} />}
          />
          <Route
            path={`${AppRoute.offer}/:id`}
            element={
              <OfferPage
                reviews={reviews}
                authorizationStatus={AuthStatus.Auth}
              />
            }
          />
          <Route
            path={AppRoute.favorites}
            element={
              <PrivateRoute authorizationStatus={AuthStatus.Auth}>
                <FavoritesPage authorizationStatus={AuthStatus.Auth} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.login}
            element={<LoginPage authorizationStatus={AuthStatus.Auth} />}
          />
          <Route
            path={AppRoute.notFound}
            element={<NotFoundPage type="page" />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
