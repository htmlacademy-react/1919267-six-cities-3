import { Host } from './host';
import { OfferPreview } from './offer-preview';

export type Offer = OfferPreview & {
  bedrooms: number;
  description: string;
  host: Host;
  images: string[];
  maxAdults: number;
};
