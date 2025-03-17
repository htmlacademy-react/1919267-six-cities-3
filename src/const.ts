import { City } from './types/city';
import { Size } from './types/size';

const AppRoute = {
  root: '/',
  login: '/login',
  favorites: '/ favorites',
  offer: '/offer',
  notFound: '*',
} as const;

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
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
      latitude: 48.8567801,
      longitude: 2.3315211,
      zoom: 10,
    },
  },
  {
    name: CityName.Cologne,
    location: {
      latitude: 50.9461149,
      longitude: 6.9415238,
      zoom: 10,
    },
  },
  {
    name: CityName.Brussels,
    location: {
      latitude: 50.8552034,
      longitude: 4.2930173,
      zoom: 10,
    },
  },
  {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.3547607,
      longitude: 4.7391566,
      zoom: 10,
    },
  },
  {
    name: CityName.Hamburg,
    location: {
      latitude: 53.5586627,
      longitude: 9.7630179,
      zoom: 10,
    },
  },
  {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.238554,
      longitude: 6.6495462,
      zoom: 10,
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

export {
  AppRoute,
  AuthStatus,
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
};
