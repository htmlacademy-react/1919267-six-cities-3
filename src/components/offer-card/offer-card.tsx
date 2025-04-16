import { Link } from 'react-router-dom';
import { AppRoute, ImageSize } from '../../const';
import { Offer } from '../../types/offer';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { getRatingWidth } from '../../utils/offer';
import PremiumMark from '../premium-mark/premium-mark';
import { Size } from '../../types/size';

type OfferCardProps = {
  offer: Offer;
  block: 'favorites' | 'cities' | 'near-places';
  size: keyof Size;
  onMouseEnter?: (offerId: Offer['id']) => void;
  onMouseLeave?: () => void;
};

function OfferCard({
  offer,
  block,
  size,
  onMouseEnter,
  onMouseLeave,
}: OfferCardProps) {
  const { id, previewImage, isPremium, title, price, rating, type } = offer;

  function handleMouseEnter() {
    onMouseEnter?.(id);
  }

  function handleMouseLeave() {
    onMouseLeave?.();
  }

  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PremiumMark block="place-card" isPremium={isPremium} />
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            {...ImageSize[size]}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton id={id} block="place-card" size="small" />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
