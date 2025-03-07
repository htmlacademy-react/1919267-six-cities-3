import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

type HeaderNavigationProps = {
  isAuth: AuthStatus;
};

function HeaderNavigation({ isAuth }: HeaderNavigationProps) {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {isAuth === AuthStatus.Auth ? (
            <Link
              to={AppRoute.favorites}
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                Oliver.conner@gmail.com
              </span>
              <span className="header__favorite-count">3</span>
            </Link>
          ) : (
            <Link
              to={AppRoute.login}
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          )}
        </li>
        {isAuth === AuthStatus.Auth && (
          <li className="header__nav-item">
            <Link to={AppRoute.root} className="header__nav-link">
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
