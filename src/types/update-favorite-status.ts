import { Offer } from './offer';

export type UpdateFavoriteStatus = {
  id: Offer['id'];
  status: number;
};
