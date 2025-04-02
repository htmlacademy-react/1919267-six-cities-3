import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { MAX_NEARBY_OFFERS_COUNT } from '../../const';
import { Offer } from '../../types/offer';
import NotFoundPage from '../not-found-page/not-found-page';
import PremiumMark from '../../components/premium-mark/premium-mark';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import { addPluralEnding, capitalizeFirstLetter } from '../../utils/common';
import { getRatingWidth } from '../../utils/offer';
import cn from 'classnames';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { Review } from '../../types/review';
import Map from '../../components/map/map';
import NearOffers from '../../components/near-offers/near-offers';
import { useAppSelector } from '../../hooks';
import { Helmet } from 'react-helmet-async';

type OfferPageProps = {
  reviews: Review[];
};

function OfferPage({ reviews }: OfferPageProps) {
  const { id } = useParams();
  const offers = useAppSelector((state) => state.offers);
  const nearOffersToRender = offers.slice(0, MAX_NEARBY_OFFERS_COUNT);
  const currentOffer: Offer | undefined = offers.find(
    (offer) => offer.id === id
  );
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  if (!currentOffer) {
    return <NotFoundPage type="offer" />;
  }

  const {
    id: offerId,
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
    city,
  } = currentOffer;

  const { name: hostName, isPro, avatarUrl } = currentOffer.host;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer page</title>
      </Helmet>
      <Header />

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
                  {bedrooms} Bedroom{addPluralEnding(bedrooms)}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adult{addPluralEnding(maxAdults)}
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
                      { 'offer__avatar-wrapper--pro': isPro }
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
          <Map
            city={city}
            offers={nearOffersToRender}
            hoveredOfferId={offerId}
            className="offer__map"
          />
        </section>
        <NearOffers nearbyPlaces={nearOffersToRender} />
      </main>
    </div>
  );
}

export default OfferPage;
