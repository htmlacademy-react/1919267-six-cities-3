import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-01-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 2,
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cff6b62a',
    date: '2020-08-08T18:00:00.569Z',
    user: {
      name: 'Sara Parker',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 5,
  },
];
