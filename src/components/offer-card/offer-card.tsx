import { ImageSize } from '../../const';
import { Size } from '../../types/size';
import BookmarkButton from '../bookmark-button/bookmark-button';
import PremiumMark from '../premium-mark/premium-mark';

type OfferCardProps = {
  block: 'favorites' | 'cities';
  size: keyof Size;
};

function OfferCard({ block, size }: OfferCardProps) {
  return (
    <article className={`${block}__card place-card`}>
      <PremiumMark block="place-card" />
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src="img/room.jpg"
            {...ImageSize[size]}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;80</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton block="place-card" size="small" />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Wood and stone place</a>
        </h2>
        <p className="place-card__type">Room</p>
      </div>
    </article>
  );
}

export default OfferCard;
