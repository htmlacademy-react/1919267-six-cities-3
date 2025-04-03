import { useLocation } from 'react-router-dom';
import HeaderNavigation from '../header-navigation/header-navigation';
import Logo from '../logo/logo';

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo block="header" size="large" />
          </div>
          {pathname !== '/login' && <HeaderNavigation />}
        </div>
      </div>
    </header>
  );
}

export default Header;
