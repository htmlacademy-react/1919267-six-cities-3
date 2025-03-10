import { CityName } from '../const';
import { Location } from './location';

export type City = {
  name: (typeof CityName)[keyof typeof CityName];
  location: Location;
};
