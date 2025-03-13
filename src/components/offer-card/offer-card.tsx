import { Link } from 'react-router-dom';
import { AppRoute, ImageSize } from '../../const';
import { Offer } from '../../types/offer';
import { Size } from '../../types/size';
import BookmarkButton from '../bookmark-button/bookmark-button';
import PremiumMark from '../premium-mark/premium-mark';
import { getRatingWidth } from '../../utils/offer';

type OfferCardProps = {
  offer: Offer;
  block: 'favorites' | 'cities';
  size: keyof Size;
  onCardHover?: (offerId: Offer['id'] | null) => void;
};

function OfferCard({ offer, block, size, onCardHover }: OfferCardProps) {
  const {
    id,
    previewImage,
    isPremium,
    title,
    price,
    isFavorite,
    rating,
    type,
  } = offer;

  function handleMouseEnter() {
    onCardHover?.(id);
  }

  function handleMouseLeave() {
    onCardHover?.(null);
  }

  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PremiumMark block="place-card" isPremium={isPremium} />
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.offer}/${id}`}>
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
          <BookmarkButton
            block="place-card"
            size="small"
            isFavorite={isFavorite}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
