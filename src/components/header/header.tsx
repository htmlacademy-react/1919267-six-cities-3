import { useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import HeaderNavigation from '../header-navigation/header-navigation';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo block="header" size="large" />
          </div>
          {pathname !== String(AppRoute.Login) && <HeaderNavigation />}
        </div>
      </div>
    </header>
  );
}

export default Header;
