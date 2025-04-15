import cn from 'classnames';
import { AppRoute, AuthorizationStatus, BookmarkSize } from '../../const';
import { Size } from '../../types/size';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { selectAuthorizationStatus } from '../../store/user-data/selectors';
import { updateFavoriteStatus } from '../../store/api-actions';
import { Offer } from '../../types/offer';
import { selectFavorites } from '../../store/favorites-data/selectors';

type BookmarkButtonProps = {
  id: Offer['id'];
  block: 'place-card' | 'offer';
  size: keyof Size;
};

function BookmarkButton({ id, block, size = 'small' }: BookmarkButtonProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const favoriteOffers = useAppSelector(selectFavorites);
  const isFavorite = favoriteOffers.some(
    (currentOffer) => currentOffer.id === id
  );

  function onButtonClickHandler() {
    if (!isAuthorized) {
      navigate(AppRoute.Login);
      return;
    }

    dispatch(
      updateFavoriteStatus({
        id,
        status: Number(!isFavorite),
      })
    );
  }

  return (
    <button
      className={cn(`${block}__bookmark-button`, 'button', {
        [`${block}__bookmark-button--active`]: isFavorite,
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
