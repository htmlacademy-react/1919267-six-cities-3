import { Route, Routes } from 'react-router-dom';
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
import { useAppDispatch } from '../../hooks';
import { checkAuth } from '../../store/api-actions';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppProps = {
  reviews: Review[];
};

function App({ reviews }: AppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />} />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage reviews={reviews} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage type="page" />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
