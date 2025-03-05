import HeaderNavigation from '../header-navigation/header-navigation';
import Logo from '../logo/logo';

type HeaderProps = {
  withNav?: boolean;
};

function Header({ withNav = true }: HeaderProps) {
  //временное решение
  const isLoggedIn = true;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo block="header" size="large" />
          </div>
          {withNav && <HeaderNavigation isLoggedIn={isLoggedIn} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
