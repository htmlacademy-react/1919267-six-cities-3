import { BookmarkSize } from '../../const';
import { TSize } from '../../types/size';

type BookmarkButtonProps = {
  block: 'place-card' | 'offer';
  size: keyof TSize;
};

function BookmarkButton({ block, size }: BookmarkButtonProps) {
  return (
    <button
      className={`${block}__bookmark-button ${block}__bookmark-button--active button`}
      type="button"
    >
      <svg className={`${block}__bookmark-icon`} {...BookmarkSize[size]}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
