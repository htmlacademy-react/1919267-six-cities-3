import cn from 'classnames';
import HeaderNavigation from '../header-navigation/header-navigation';

function Header() {
  //временное решение
  const isLoggedIn = true;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a
              className={cn('header__logo-link', {
                'header__logo-link--active': isLoggedIn,
              })}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>
          <HeaderNavigation isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </header>
  );
}

export default Header;
