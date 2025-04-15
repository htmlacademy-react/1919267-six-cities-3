import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { checkAuth, fetchFavoriteOffers } from '../../store/api-actions';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/user-data/selectors';

function App() {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOffers());
    }
  }, [dispatch, authorizationStatus]);

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute publicRoute>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />} />
          <Route path="*" element={<NotFoundPage type="page" />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
