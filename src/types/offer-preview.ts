import { City } from './city';
import { Location } from './location';

export enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

export type OfferPreview = {
  city: City;
  goods: string[];
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
};
