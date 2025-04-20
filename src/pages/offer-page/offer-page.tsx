import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import NotFoundPage from '../not-found-page/not-found-page';
import PremiumMark from '../../components/premium-mark/premium-mark';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import { addPluralEnding, capitalizeFirstLetter } from '../../utils/common';
import { getRatingWidth } from '../../utils/offer';
import cn from 'classnames';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import {
  fetchActiveOffer,
  fetchNearbyOffers,
  fetchReviews,
} from '../../store/api-actions';
import {
  MAX_NEARBY_OFFERS_COUNT,
  MAX_OFFER_PHOTOS_COUNT,
  RequestStatus,
} from '../../const';
import {
  selectActiveOffer,
  selectOfferFetchingStatus,
} from '../../store/offer-data/selectors';
import { dropActiveOffer } from '../../store/offer-data/offer-data';
import { selectNearbyOffers } from '../../store/nearby-offers-data/selectors';
import NearOffers from '../../components/near-offers/near-offers';
import Loader from '../../components/loader/loader';
import { selectReviews } from '../../store/reviews-data/selectors';

function OfferPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector(selectActiveOffer);
  const offerFetchingStatus = useAppSelector(selectOfferFetchingStatus);
  const nearbyOffers = useAppSelector(selectNearbyOffers);
  const nearbyOffersToRender = nearbyOffers.slice(0, MAX_NEARBY_OFFERS_COUNT);
  const reviews = useAppSelector(selectReviews);

  useEffect(() => {
    if (id) {
      Promise.all([
        dispatch(fetchActiveOffer(id)),
        dispatch(fetchNearbyOffers(id)),
        dispatch(fetchReviews(id)),
      ]);
    }

    return () => {
      dispatch(dropActiveOffer());
    };
  }, [dispatch, id]);

  if (offerFetchingStatus === RequestStatus.Loading) {
    return (
      <>
        <Helmet>
          <title>6 cities. Offer page</title>
        </Helmet>
        <Loader />
        <Header />
      </>
    );
  }

  if (offerFetchingStatus === RequestStatus.Error || !currentOffer) {
    return <NotFoundPage type="offer" />;
  }

  const {
    id: offerId,
    images,
    isPremium,
    title,
    price,
    goods,
    type,
    bedrooms,
    maxAdults,
    rating,
    description,
    city,
    isFavorite,
  } = currentOffer;

  const { name: hostName, isPro, avatarUrl } = currentOffer.host;
  const offersforMap = [currentOffer, ...nearbyOffersToRender];

  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer page</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--offer" data-testid="offer-page">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.slice(0, MAX_OFFER_PHOTOS_COUNT).map((image) => (
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
                  id={offerId}
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
              {offerId && <ReviewsList offerId={offerId} reviews={reviews} />}
            </div>
          </div>
          <Map
            city={city}
            offers={offersforMap}
            hoveredOfferId={offerId}
            className="offer__map"
          />
        </section>
        <NearOffers nearbyPlaces={nearbyOffersToRender} />
      </main>
    </div>
  );
}

export default OfferPage;
