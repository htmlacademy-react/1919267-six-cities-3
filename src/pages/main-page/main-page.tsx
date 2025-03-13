import { useState } from 'react';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import { AuthStatus, DEFAULT_CITY } from '../../const';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import MainBlock from '../../components/main-block/main-block';

type MainPageProps = {
  offers: Offer[];
  authorizationStatus: AuthStatus;
};

function MainPage({ offers, authorizationStatus }: MainPageProps) {
  const [currentCity, setCurrentCity] = useState<City>(DEFAULT_CITY);

  return (
    <div className="page page--gray page--main">
      <Header isAuth={authorizationStatus} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs currentCity={currentCity} onTabClick={setCurrentCity} />
        <div className="cities">
          <MainBlock currentLocation={currentCity} currentOffers={offers} />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
