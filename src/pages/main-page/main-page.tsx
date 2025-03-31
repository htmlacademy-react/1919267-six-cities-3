import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import { AuthStatus } from '../../const';
import MainBlock from '../../components/main-block/main-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { fetchOffers } from '../../store/api-actions';

type MainPageProps = {
  authorizationStatus: AuthStatus;
};

function MainPage({ authorizationStatus }: MainPageProps) {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);
  const currentOffers = offers.filter(
    (offer) => offer.city.name === currentCity.name
  );

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Main page</title>
      </Helmet>
      <Header isAuth={authorizationStatus} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs currentCity={currentCity} />
        <div className="cities">
          <MainBlock
            currentLocation={currentCity}
            currentOffers={currentOffers}
          />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
