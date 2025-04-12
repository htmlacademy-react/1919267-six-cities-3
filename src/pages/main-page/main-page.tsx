import { useAppDispatch, useAppSelector } from '../../hooks';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { fetchOffers } from '../../store/api-actions';
import classNames from 'classnames';
import MainBlock from '../../components/main-block/main-block';
import Header from '../../components/header/header';
import {
  selectCurrentCity,
  selectOffers,
  selectOffersFetchingStatus,
} from '../../store/offers-data/selectors';
import Tabs from '../../components/tabs/tabs';
import { RequestStatus } from '../../const';
import Spinner from '../../components/spinner/spinner';
import MainEmptyBlock from '../../components/main-empty-block/main-empty-block';

function MainPage() {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(selectCurrentCity);
  const offers = useAppSelector(selectOffers);
  const currentOffers = offers.filter(
    (offer) => offer.city.name === currentCity.name
  );
  const fetchingStatus = useAppSelector(selectOffersFetchingStatus);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Main page</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs currentCity={currentCity} />
        <div className="cities">
          <div
            className={classNames(
              'cities__places-container',
              'container',
              !offers.length && 'cities__places-container--empty'
            )}
          >
            {fetchingStatus === RequestStatus.Loading && <Spinner />}
            {offers.length ? (
              <MainBlock
                currentLocation={currentCity}
                currentOffers={currentOffers}
              />
            ) : (
              <MainEmptyBlock cityName={currentCity.name} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
