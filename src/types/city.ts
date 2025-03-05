import { Cities } from '../const';

export type TCity = {
  id: number;
  name: keyof typeof Cities;
};
