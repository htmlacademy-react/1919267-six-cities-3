import { Offer } from '../types/offer';

function getRatingWidth(rating: number | undefined) {
  return rating ? `${rating / 0.05}%` : '0%';
}

function getOffersByLocation(items: Offer[]) {
  return items.reduce<{ [key: string]: Offer[] }>((acc, current) => {
    const location = current.city.name;
    if (!(location in acc)) {
      acc[location] = [];
    }
    acc[location].push(current);

    return acc;
  }, {});
}

export { getRatingWidth, getOffersByLocation };
