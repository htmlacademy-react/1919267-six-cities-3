import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/api-actions';
import {
  selectAuthorizationStatus,
  selectUserData,
} from '../../store/user-data/selectors';
import { selectFavorites } from '../../store/favorites-data/selectors';

function HeaderNavigation() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  const favoritesCount = useAppSelector(selectFavorites)?.length;
  const user = useAppSelector(selectUserData);

  function onLogoutClickHandler() {
    dispatch(logout());
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {authorizationStatus === AuthorizationStatus.Auth ? (
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
              <span className="header__favorite-count">{favoritesCount}</span>
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
        {authorizationStatus === AuthorizationStatus.Auth && (
          <li className="header__nav-item">
            <Link
              to="#"
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
