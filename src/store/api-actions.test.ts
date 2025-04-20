import { createApi } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import { Action } from 'redux';
import {
  AppThunkDispatch,
  extractActionTypes,
  makeFakeFullOffer,
  makeFakeOfferPreview,
  makeFakeReview,
} from '../test-mocks/test-mocks';
import {
  checkAuth,
  fetchActiveOffer,
  fetchFavoriteOffers,
  fetchNearbyOffers,
  fetchOffers,
  fetchReviews,
  login,
  logout,
  sendReview,
  updateFavoriteStatus,
} from './api-actions';
import { APIRoute } from '../const';
import { TLoginData } from '../types/login-data';
import * as tokenStorage from '../services/token';
import { ReviewData } from '../types/review';
import { UpdateFavoriteStatus } from '../types/update-favorite-status';

describe('Async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    State,
    Action<string>,
    AppThunkDispatch
  >(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      OFFERS_DATA: {
        offers: [],
      },
    });
  });

  describe('CheckAuth', () => {
    it('should dispatch "checkAuth.pending" and "checkAuth.fulfilled" with thunk "checkAuth"', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuth());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        checkAuth.pending.type,
        checkAuth.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuth.pending" and "checkAuth.rejected" when server response is400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuth());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([
        checkAuth.pending.type,
        checkAuth.rejected.type,
      ]);
    });
  });

  describe('FetchOffers', () => {
    it('should dispatch "fetchOffers.pending" and "fetchOffers.fulfilled" when server response is 200', async () => {
      const mockOffers = Array.from({ length: 10 }, () =>
        makeFakeOfferPreview()
      );
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

      await store.dispatch(fetchOffers());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionTypes(emittedActions);
      const fetchOffersFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchOffers.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        fetchOffers.pending.type,
        fetchOffers.fulfilled.type,
      ]);

      expect(fetchOffersFulfilled.payload).toEqual(mockOffers);
      expect(fetchOffersFulfilled.payload.length).toBe(10);
    });

    it('should dispatch "fetchOffers.pending" and "fetchOffers.rejected" when server response is 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchOffers());
      const extractedActionsTypes = extractActionTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchOffers.pending.type,
        fetchOffers.rejected.type,
      ]);
    });
  });

  describe('FetchActiveOffer', () => {
    it('should dispatch "fetchActiveOffer.pending" and "fetchActiveOffer.fulfilled" when server response is 200', async () => {
      const fakeActiveOffer = makeFakeFullOffer();
      const fakeId = fakeActiveOffer.id;

      mockAxiosAdapter
        .onGet(`${APIRoute.Offers}/${fakeId}`)
        .reply(200, fakeActiveOffer);

      await store.dispatch(fetchActiveOffer(fakeId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionTypes(emittedActions);
      const fetchActiveOfferFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchActiveOffer.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        fetchActiveOffer.pending.type,
        fetchActiveOffer.fulfilled.type,
      ]);

      expect(fetchActiveOfferFulfilled.payload).toEqual(fakeActiveOffer);
    });

    it('should dispatch "fetchActiveOffer.pending" and "fetchActiveOffer.rejected" when server response is 400', async () => {
      const fakeActiveOffer = makeFakeFullOffer();
      const fakeId = fakeActiveOffer.id;

      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${fakeId}`).reply(400, []);

      await store.dispatch(fetchActiveOffer(fakeId));
      const extractedActionsTypes = extractActionTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchActiveOffer.pending.type,
        fetchActiveOffer.rejected.type,
      ]);
    });
  });

  describe('Reviews actions', () => {
    const fakeFullOffer = makeFakeFullOffer();
    const mockReviews = Array.from({ length: 8 }, () => makeFakeReview());
    const fakeId = fakeFullOffer.id;

    it('should dispatch "fetchReviews.pending" and "fetchReviews.fulfilled" when server response is 200', async () => {
      mockAxiosAdapter
        .onGet(`${APIRoute.Reviews}/${fakeId}`)
        .reply(200, mockReviews);

      await store.dispatch(fetchReviews(fakeId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionTypes(emittedActions);
      const fetchReviewsFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchReviews.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        fetchReviews.pending.type,
        fetchReviews.fulfilled.type,
      ]);

      expect(fetchReviewsFulfilled.payload).toEqual(mockReviews);
      expect(fetchReviewsFulfilled.payload.length).toBe(8);
    });

    it('should dispatch "fetchReviews.pending" and "fetchReviews.rejected" when server response is 400', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Reviews}/${fakeId}`).reply(400, []);

      await store.dispatch(fetchReviews(fakeId));
      const extractedActionsTypes = extractActionTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchReviews.pending.type,
        fetchReviews.rejected.type,
      ]);
    });

    it('should return correct data with "sendReview" action and server response 204', async () => {
      const fakeReview = makeFakeReview();
      const fakeReviewData: ReviewData = {
        id: fakeReview.id,
        comment: fakeReview.comment,
        rating: fakeReview.rating,
      };

      mockAxiosAdapter
        .onPost(`${APIRoute.Reviews}/${fakeReview.id}`)
        .reply(204, fakeReview);

      await store.dispatch(sendReview(fakeReviewData));

      const actions = extractActionTypes(store.getActions());
      const sendReviewFulfilled = store.getActions().at(1) as ReturnType<
        typeof sendReview.fulfilled
      >;

      expect(actions).toEqual([
        sendReview.pending.type,
        sendReview.fulfilled.type,
      ]);

      expect(sendReviewFulfilled.payload).toEqual(fakeReview);
    });
  });

  describe('FavoriteOffers actions', () => {
    it('should dispatch "fetchFavoriteOffers.pending" and "fetchFavoriteOffers.fulfilled" when server response is 200', async () => {
      const favoriteOffers = Array.from({ length: 10 }, () =>
        makeFakeOfferPreview()
      );
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, favoriteOffers);

      await store.dispatch(fetchFavoriteOffers());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionTypes(emittedActions);
      const fetchFavoriteOffersFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchFavoriteOffers.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteOffers.pending.type,
        fetchFavoriteOffers.fulfilled.type,
      ]);

      expect(fetchFavoriteOffersFulfilled.payload).toEqual(favoriteOffers);
      expect(fetchFavoriteOffersFulfilled.payload.length).toBe(10);
    });

    it('should dispatch "fetchFavoriteOffers.pending" and "fetchFavoriteOffers.rejected" when server response is 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(400, []);

      await store.dispatch(fetchFavoriteOffers());
      const extractedActionsTypes = extractActionTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchFavoriteOffers.pending.type,
        fetchFavoriteOffers.rejected.type,
      ]);
    });

    it('should return correct state and response when server answer is 200', async () => {
      const fakeFavoriteOffer = makeFakeFullOffer();
      fakeFavoriteOffer.isFavorite = false;
      const favoriteOfferUpdateData: UpdateFavoriteStatus = {
        id: fakeFavoriteOffer.id,
        status: 0,
      };

      mockAxiosAdapter
        .onPost(
          `${APIRoute.Favorite}/${favoriteOfferUpdateData.id}/${favoriteOfferUpdateData.status}`
        )
        .reply(200, fakeFavoriteOffer);

      await store.dispatch(updateFavoriteStatus(favoriteOfferUpdateData));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionTypes(emittedActions);
      const changedFavoriteFulfilled = emittedActions.at(1) as ReturnType<
        typeof updateFavoriteStatus.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        updateFavoriteStatus.pending.type,
        updateFavoriteStatus.fulfilled.type,
      ]);

      expect(changedFavoriteFulfilled.payload.status).toBeFalsy();
    });
  });

  describe('FetchNearbyOffers', () => {
    const fakeNearbyOffers = Array.from({ length: 3 }, () =>
      makeFakeOfferPreview()
    );
    const fakeFullOffer = makeFakeFullOffer();
    const fakeId = fakeFullOffer.id;

    it('should dispatch "fetchNearbyOffers.pending" and "fetchNearbyOffers.fulfilled" when server response is 200', async () => {
      mockAxiosAdapter
        .onGet(`${APIRoute.Offers}/${fakeId}${APIRoute.NearbyOffers}`)
        .reply(200, fakeNearbyOffers);

      await store.dispatch(fetchNearbyOffers(fakeId));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionTypes(emittedActions);
      const fetchReviewsFulfilled = emittedActions.at(1) as ReturnType<
        typeof fetchNearbyOffers.fulfilled
      >;

      expect(extractedActionsTypes).toEqual([
        fetchNearbyOffers.pending.type,
        fetchNearbyOffers.fulfilled.type,
      ]);

      expect(fetchReviewsFulfilled.payload).toEqual(fakeNearbyOffers);
      expect(fetchReviewsFulfilled.payload.length).toBe(3);
    });

    it('should dispatch "fetchNearbyOffers.pending" and "fetchNearbyOffers.rejected" when server response is 400', async () => {
      mockAxiosAdapter
        .onGet(`${APIRoute.Offers}/${fakeId}${APIRoute.NearbyOffers}`)
        .reply(400, []);

      await store.dispatch(fetchNearbyOffers(fakeId));
      const extractedActionsTypes = extractActionTypes(store.getActions());

      expect(extractedActionsTypes).toEqual([
        fetchNearbyOffers.pending.type,
        fetchNearbyOffers.rejected.type,
      ]);
    });
  });

  describe('Login', () => {
    it('should dispatch "login.pending" and "login.fulfilled" when server response is 200', async () => {
      const fakeUserData: TLoginData = {
        email: 'test@test.com',
        password: '12345',
      };
      const fakeServerResponse = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerResponse);

      await store.dispatch(login(fakeUserData));

      const actions = extractActionTypes(store.getActions());
      expect(actions).toEqual([login.pending.type, login.fulfilled.type]);
    });

    it('should call "saveToken" once with the received token', async () => {
      const fakeUserData: TLoginData = {
        email: 'test@test.com',
        password: '12345',
      };
      const fakeServerResponse = { token: 'secret' };
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerResponse);

      const mockSaveToken = vi.spyOn(tokenStorage, 'setToken');

      await store.dispatch(login(fakeUserData));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerResponse.token);
    });
  });

  describe('Logout', () => {
    it('should dispatch "logout.pending" and "logout.fulfilled" when server response is 204', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logout());
      const actions = extractActionTypes(store.getActions());

      expect(actions).toEqual([logout.pending.type, logout.fulfilled.type]);
    });

    it('should call "dropToken" once with "logout" action', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logout());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });
});
