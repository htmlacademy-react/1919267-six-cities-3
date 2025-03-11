import cn from 'classnames';
import { BookmarkSize } from '../../const';
import { Size } from '../../types/size';

type BookmarkButtonProps = {
  block: 'place-card' | 'offer';
  size: keyof Size;
  isFavorite: boolean;
};

function BookmarkButton({ block, size, isFavorite }: BookmarkButtonProps) {
  return (
    <button
      className={cn(`${block}__bookmark-button`, 'button', {
        [`${block}__bookmark-button--active`]: isFavorite,
      })}
      type="button"
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
