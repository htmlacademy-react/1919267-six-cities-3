import cn from 'classnames';
import { AppRoute, AuthorizationStatus, BookmarkSize } from '../../const';
import { Size } from '../../types/size';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { selectAuthorizationStatus } from '../../store/user-data/selectors';
import { useState } from 'react';
import {
  fetchFavoriteOffers,
  updateFavoriteStatus,
} from '../../store/api-actions';
import { Offer } from '../../types/offer';

type BookmarkButtonProps = {
  id: Offer['id'];
  block: 'place-card' | 'offer';
  size: keyof Size;
  isFavorite: boolean;
};

function BookmarkButton({
  id,
  block,
  size = 'small',
  isFavorite,
}: BookmarkButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(isFavorite);

  function onButtonClickHandler() {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
      return;
    }
    setFavoriteStatus((prevState) => !prevState);

    dispatch(
      updateFavoriteStatus({
        id,
        status: Number(!favoriteStatus),
      })
    ).then(() => dispatch(fetchFavoriteOffers()));
  }

  return (
    <button
      className={cn(`${block}__bookmark-button`, 'button', {
        [`${block}__bookmark-button--active`]: favoriteStatus,
      })}
      type="button"
      onClick={onButtonClickHandler}
    >
      <svg className={`${block}__bookmark-icon`} {...BookmarkSize[size]}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default BookmarkButton;
