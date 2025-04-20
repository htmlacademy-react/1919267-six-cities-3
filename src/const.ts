import { Size } from './types/size';

enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/*',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

const BookmarkSize: Size = {
  small: { width: '18', height: '19' },
  large: { width: '31', height: '33' },
} as const;

const ImageSize: Size = {
  small: { width: '150', height: '110' },
  large: { width: '260', height: '200' },
} as const;

const LogoSize: Size = {
  small: { width: '64', height: '33' },
  large: { width: '81', height: '41' },
} as const;

const CityMap = {
  Paris: {
    name: Cities.Paris,
    location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
  },
  Cologne: {
    name: Cities.Cologne,
    location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
  },
  Brussels: {
    name: Cities.Brussels,
    location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
  },
  Amsterdam: {
    name: Cities.Amsterdam,
    location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 },
  },
  Hamburg: {
    name: Cities.Hamburg,
    location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
  },
  Dusseldorf: {
    name: Cities.Dusseldorf,
    location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
  },
} as const;

const DEFAULT_CITY = Cities.Paris;

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';

const MAX_NEARBY_OFFERS_COUNT = 3;
const MAX_OFFER_PHOTOS_COUNT = 6;
const MAX_SHOWN_REVIEWS = 10;

enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  NearbyOffers = '/nearby',
  Favorite = '/favorite',
}

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

enum RequestStatus {
  Loading = 'Loading',
  Idle = 'Idle',
  Error = 'Error',
  Success = 'Success',
}

enum NameSpace {
  OffersData = 'OFFERS_DATA',
  OfferData = 'OFFER_DATA',
  ReviewData = 'REVIEW_DATA',
  UserData = 'USER_DATA',
  FavoritesData = 'FAVORITES_DATA',
  NearbyOffersData = 'NEARBY_OFFERS_DATA',
}

const HttpStatus = {
  Ok: 200,
  Created: 201,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
} as const;

enum Sorting {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRating = 'Top rated first',
}

const DEFAULT_SORTING_OPTION = Sorting['Popular'];

enum FavoritesStatus {
  Removed,
  Added,
}

export {
  MAX_OFFER_PHOTOS_COUNT,
  AppRoute,
  AuthorizationStatus,
  Cities,
  DEFAULT_CITY,
  MAX_COMMENT_LENGTH,
  MIN_COMMENT_LENGTH,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
  Sorting,
  DEFAULT_SORTING_OPTION,
  APIRoute,
  BookmarkSize,
  ImageSize,
  LogoSize,
  BACKEND_URL,
  REQUEST_TIMEOUT,
  MAX_NEARBY_OFFERS_COUNT,
  MAX_SHOWN_REVIEWS,
  RequestStatus,
  NameSpace,
  HttpStatus,
  CityMap,
  FavoritesStatus,
};
