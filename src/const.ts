import { City } from './types/city';
import { Size } from './types/size';

enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/*',
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  NearbyOffers = '/nearby',
  Favorite = '/favorite',
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

const CityName = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

const CITIES: City[] = [
  {
    name: CityName.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  {
    name: CityName.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  {
    name: CityName.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    name: CityName.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
];

const DEFAULT_CITY = CITIES[0];

enum Sorting {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRating = 'Top rated first',
}

const DEFAULT_SORTING_OPTION = Sorting['Popular'];

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';

const MAX_NEARBY_OFFERS_COUNT = 3;
const MAX_SHOWN_REVIEWS = 10;

const TIMEOUT_SHOW_ERROR = 2000;

const ACTION_TYPE_REDIRECT = 'app/redirectToRoute';

export {
  AppRoute,
  AuthStatus,
  APIRoute,
  BookmarkSize,
  ImageSize,
  LogoSize,
  CityName,
  CITIES,
  DEFAULT_CITY,
  Sorting,
  DEFAULT_SORTING_OPTION,
  MIN_COMMENT_LENGTH,
  MAX_COMMENT_LENGTH,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
  MAX_NEARBY_OFFERS_COUNT,
  MAX_SHOWN_REVIEWS,
  TIMEOUT_SHOW_ERROR,
  ACTION_TYPE_REDIRECT,
};
