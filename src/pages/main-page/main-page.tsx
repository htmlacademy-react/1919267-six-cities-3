import { useState } from 'react';
import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';
import Tabs from '../../components/tabs/tabs';
import {
  AuthStatus,
  DEFAULT_CITY,
  DEFAULT_SORTING_OPTION,
  Sorting,
} from '../../const';
import { City } from '../../types/city';
import SortingForm from '../../components/sortingForm/sortingForm';
import { Offer } from '../../types/offer';

type MainPageProps = {
  offers: Offer[];
  authorizationStatus: AuthStatus;
};

function MainPage({ offers, authorizationStatus }: MainPageProps) {
  const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);
  const [activeSorting, setActiveSorting] = useState<Sorting>(
    DEFAULT_SORTING_OPTION,
  );

  return (
    <div className="page page--gray page--main">
      <Header isAuth={authorizationStatus} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs currentCity={currentCity} onTabClick={setCurrentCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortingForm
                activeSorting={activeSorting}
                onSortingOptionClick={setActiveSorting}
              />
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (
                  <PlaceCard key={offer.id} block="cities" size="large" />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
