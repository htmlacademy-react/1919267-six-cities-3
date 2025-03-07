import { TSize } from './types/size';

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

const Settings = {
  PLACES_COUNT: 5,
} as const;

const BookmarkSize: TSize = {
  small: { width: '18', height: '19' },
  large: { width: '31', height: '33' },
} as const;

const ImageSize: TSize = {
  small: { width: '150', height: '110' },
  large: { width: '260', height: '200' },
} as const;

const LogoSize: TSize = {
  small: { width: '64', height: '33' },
  large: { width: '81', height: '41' },
} as const;

enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

const CityMap = {
  [Cities.Paris]: { id: 1, name: Cities.Paris },
  [Cities.Cologne]: { id: 2, name: Cities.Cologne },
  [Cities.Brussels]: { id: 3, name: Cities.Brussels },
  [Cities.Amsterdam]: { id: 4, name: Cities.Amsterdam },
  [Cities.Hamburg]: { id: 5, name: Cities.Hamburg },
  [Cities.Dusseldorf]: { id: 6, name: Cities.Dusseldorf },
};

const DEFAULT_CITY = CityMap[Cities.Paris];

enum Sorting {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRating = 'Top rated first',
}

const DEFAULT_SORTING_OPTION = Sorting['Popular'];

export {
  AppRoute,
  AuthStatus,
  Settings,
  BookmarkSize,
  ImageSize,
  LogoSize,
  Cities,
  CityMap,
  DEFAULT_CITY,
  Sorting,
  DEFAULT_SORTING_OPTION,
};
