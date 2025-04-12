import { OfferPreview } from './offer-preview';
import { Host } from './host';

export type Offer = OfferPreview & {
  bedrooms: number;
  description: string;
  host: Host;
  images: string[];
  maxAdults: number;
}
