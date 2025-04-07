import { Host } from './host';

export type Review = {
  id: string;
  user: Omit<Host, 'id'>;
  rating: number;
  comment: string;
  date: string;
};

export type ReviewData = {
  id: string;
  comment: string;
  rating: number;
};
