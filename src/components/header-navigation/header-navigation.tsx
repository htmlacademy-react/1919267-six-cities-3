import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/api-actions';

function HeaderNavigation() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  const favorites = useAppSelector((state) => state.favorites);
  const user = useAppSelector((state) => state.user);

  function onLogoutClickHandler() {
    dispatch(logout());
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {authorizationStatus === AuthStatus.Auth ? (
            <Link
              to={AppRoute.Favorites}
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper">
                <img
                  className="header__avatar user__avatar"
                  src={user?.avatarUrl}
                  alt="avatar"
                />
              </div>
              <span className="header__user-name user__name">
                {user?.email}
              </span>
              <span className="header__favorite-count">{favorites.length}</span>
            </Link>
          ) : (
            <Link
              to={AppRoute.Login}
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          )}
        </li>
        {authorizationStatus === AuthStatus.Auth && (
          <li className="header__nav-item">
            <Link
              to={AppRoute.Root}
              className="header__nav-link"
              onClick={onLogoutClickHandler}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
