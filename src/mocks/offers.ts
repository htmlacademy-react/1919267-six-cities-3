import { CityName } from '../const';
import { Offer } from '../types/offer';
import { OfferType } from '../types/offer-preview';

export const Offers: Offer[] = [
  {
    id: 'cefbdb9e-af28-4166-90ed-273428016b25',
    title: 'Wood and stone place',
    type: OfferType.Hotel,
    price: 202,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: CityName.Brussels,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    goods: ['Laptop friendly workspace', 'Breakfast'],
    isFavorite: true,
    isPremium: true,
    rating: 3.1,
    bedrooms: 1,
    description:
      'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    ],
    maxAdults: 2,
  },
  {
    id: '4da58b5e-1a67-40f0-b998-2af668bbdfc8',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: OfferType.Room,
    price: 243,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    goods: ['Laptop friendly workspace', 'Breakfast', 'Washer'],
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
    bedrooms: 1,
    description:
      'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    ],
    maxAdults: 2,
  },
  {
    id: '9a374ac2-2af3-4c70-9f8d-a7ccbaa4de1c',
    title: 'Nice, cozy, warm big bed apartment',
    type: OfferType.Hotel,
    price: 354,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    goods: [
      'Washing machine',
      'Laptop friendly workspace',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Coffee machine',
      'Fridge',
      'Breakfast',
      'Washer',
      'Dishwasher',
    ],
    isFavorite: true,
    isPremium: true,
    rating: 1.4,
    bedrooms: 4,
    description:
      'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    ],
    maxAdults: 8,
  },
  {
    id: '28c808ba-edd8-4934-b095-2cf8ca59905a',
    title: 'Amazing and Extremely Central Flat',
    type: OfferType.Room,
    price: 196,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    goods: [
      'Breakfast',
      'Washer',
      'Laptop friendly workspace',
      'Air conditioning',
    ],
    isFavorite: false,
    isPremium: false,
    rating: 3.4,
    bedrooms: 2,
    description:
      'This is a place for dreamers to reset, reflect, and create. Designed with a "slow" pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    ],
    maxAdults: 4,
  },
];
