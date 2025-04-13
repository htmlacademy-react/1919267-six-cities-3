import { combineReducers } from 'redux';
import { NameSpace } from '../const';
import { reviewsData } from './reviews-data/reviews-data';
import { userData } from './user-data/user-data';
import { offersData } from './offers-data/offers-data';
import { favoritesData } from './favorites-data/favorites-data';
import { offerData } from './offer-data/offer-data';
import { nearbyOffersData } from './nearby-offers-data/nearby-offers-data';

export const rootReducer = combineReducers({
  [NameSpace.ReviewData]: reviewsData.reducer,
  [NameSpace.UserData]: userData.reducer,
  [NameSpace.OffersData]: offersData.reducer,
  [NameSpace.FavoritesData]: favoritesData.reducer,
  [NameSpace.OfferData]: offerData.reducer,
  [NameSpace.NearbyOffersData]: nearbyOffersData.reducer
});
