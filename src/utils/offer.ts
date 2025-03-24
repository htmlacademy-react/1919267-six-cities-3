import { Sorting } from '../const';
import { Offer } from '../types/offer';

function getRatingWidth(rating: number | undefined) {
  return rating ? `${rating / 0.05}%` : '0%';
}

function groupOffersByLocation(items: Offer[]) {
  return items.reduce<{ [key: string]: Offer[] }>((acc, current) => {
    const location = current.city.name;
    if (!(location in acc)) {
      acc[location] = [];
    }
    acc[location].push(current);

    return acc;
  }, {});
}

function sortByRating(itemA: Offer, itemB: Offer) {
  return itemB.rating - itemA.rating;
}

function sortFromLowToHigh(itemA: Offer, itemB: Offer) {
  return itemA.price - itemB.price;
}

function sortFromHighToLow(itemA: Offer, itemB: Offer) {
  return itemB.price - itemA.price;
}

// enum Sorting {
//   Popular = 'Popular',
//   LowToHigh = 'Price: low to high',
//   HighToLow = 'Price: high to low',
//   TopRating = 'Top rated first',
// }

const sorting = {
  [Sorting.Popular]: (offers: Offer[]) => offers.slice(),
  [Sorting.HighToLow]: (offers: Offer[]) => [...offers].sort(sortFromHighToLow),
  [Sorting.LowToHigh]: (offers: Offer[]) => [...offers].sort(sortFromLowToHigh),
  [Sorting.TopRating]: (offers: Offer[]) => [...offers].sort(sortByRating),
};

export { getRatingWidth, groupOffersByLocation, sorting };
