import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { Review } from '../../types/review';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { checkAuth } from '../../store/api-actions';

type AppProps = {
  reviews: Review[];
};

function App({ reviews }: AppProps) {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.root}
            element={<MainPage authorizationStatus={authorizationStatus} />}
          />
          <Route
            path={`${AppRoute.offer}/:id`}
            element={
              <OfferPage
                reviews={reviews}
                authorizationStatus={authorizationStatus}
              />
            }
          />
          <Route
            path={AppRoute.favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage authorizationStatus={authorizationStatus} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.login}
            element={<LoginPage authorizationStatus={authorizationStatus} />}
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
