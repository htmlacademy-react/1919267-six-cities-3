import { AppRoute } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { checkAuth } from '../../store/api-actions';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import ProtectedRoute from '../protected-route/protected-route';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute>
                <FavoritesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <ProtectedRoute publicRoute>
                <LoginPage />
              </ProtectedRoute>
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
