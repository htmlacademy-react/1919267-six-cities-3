import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { AuthStatus } from '../../const';
import { Offer } from '../../types/offer';
import NotFoundPage from '../not-found-page/not-found-page';
import PremiumMark from '../../components/premium-mark/premium-mark';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import { capitalizeFirstLetter } from '../../utils/common';
import { getRatingWidth } from '../../utils/offer';
import cn from 'classnames';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { Review } from '../../types/review';

type OfferPageProps = {
  offers: Offer[];
  authorizationStatus: AuthStatus;
  reviews: Review[];
};

function OfferPage({ offers, authorizationStatus, reviews }: OfferPageProps) {
  const { id } = useParams();
  const currentOffer: Offer | undefined = offers.find(
    (offer) => offer.id === id,
  );

  if (!currentOffer) {
    return <NotFoundPage type="offer" />;
  }

  const {
    images,
    isPremium,
    title,
    isFavorite,
    price,
    goods,
    type,
    bedrooms,
    maxAdults,
    rating,
    description,
  } = currentOffer;

  const { name: hostName, isPro, avatarUrl } = currentOffer.host;

  const bedroomsCapacity =
    bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`;
  const adultsQuantity =
    maxAdults > 1 ? `Max ${maxAdults} adults` : `Max ${maxAdults} adult`;

  return (
    <div className="page">
      <Header isAuth={authorizationStatus} />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img
                    className="offer__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <PremiumMark block="offer" isPremium={isPremium} />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <BookmarkButton
                  block="offer"
                  size="large"
                  isFavorite={isFavorite}
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRatingWidth(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFirstLetter(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedroomsCapacity}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {adultsQuantity}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((item) => (
                    <li key={item} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={cn(
                      'offer__avatar-wrapper',
                      'user__avatar-wrapper',
                      { 'offer__avatar-wrapper--pro': isPro },
                    )}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{hostName}</span>
                  {isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <ReviewsList
                reviews={reviews}
                authorizationStatus={authorizationStatus}
              />
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src="img/room.jpg"
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">
                        &#47;&nbsp;night
                      </span>
                    </div>
                    <button
                      className="place-card__bookmark-button place-card__bookmark-button--active button"
                      type="button"
                    >
                      <svg
                        className="place-card__bookmark-icon"
                        width="18"
                        height="19"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
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

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src="img/apartment-02.jpg"
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;132</b>
                      <span className="place-card__price-text">
                        &#47;&nbsp;night
                      </span>
                    </div>
                    <button
                      className="place-card__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="place-card__bookmark-icon"
                        width="18"
                        height="19"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '80%' }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img
                      className="place-card__image"
                      src="img/apartment-03.jpg"
                      width="260"
                      height="200"
                      alt="Place image"
                    />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
                      <span className="place-card__price-text">
                        &#47;&nbsp;night
                      </span>
                    </div>
                    <button
                      className="place-card__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="place-card__bookmark-icon"
                        width="18"
                        height="19"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: '100%' }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
