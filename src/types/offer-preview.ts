import { City } from './city';
import { TLocation } from './location';

export type OfferPreview = {
  id: string;
  city: City;
  goods: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: TLocation;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};
