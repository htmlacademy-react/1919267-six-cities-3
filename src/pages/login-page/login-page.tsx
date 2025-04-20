import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, CityMap } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setCurrentCity } from '../../store/offers-data/offers-data';
import { getRandomArrayElement } from '../../utils/common';

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const randomCity = getRandomArrayElement(Object.values(CityMap));

  function onRandomCityClickHandler(evt: React.MouseEvent<HTMLAnchorElement>) {
    evt.preventDefault();
    dispatch(setCurrentCity(randomCity));
    navigate(AppRoute.Root);
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Login page</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--login" data-testid="login-page">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Root}
                onClick={onRandomCityClickHandler}
              >
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
