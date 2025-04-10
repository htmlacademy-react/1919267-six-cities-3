import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { Offer } from '../types/offer';
import {
  redirectToRoute,
  requireAuthorization,
  setCurrentOffer,
  setError,
  setLoadingStatus,
  setNearbyOffers,
  setOfferReviews,
  setOffers,
  setUserInfo,
} from './action';
import { dropToken, setToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { store } from './';
import { User } from '../types/user';
import { Review, ReviewData } from '../types/review';

export const fetchOffers = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setLoadingStatus(true));
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
  dispatch(setLoadingStatus(false));
  dispatch(setOffers(data));
});

export const checkAuth = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<User>(APIRoute.Login);
    dispatch(setUserInfo(data));
    dispatch(requireAuthorization(AuthStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthStatus.NoAuth));
  }
});

export const fetchCurrentOffer = createAsyncThunk<
  void,
  Offer['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchCurrentOffer', async (offerId, { dispatch, extra: api }) => {
  dispatch(setLoadingStatus(true));
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
  dispatch(setLoadingStatus(false));
  dispatch(setCurrentOffer(data));
});

export const fetchReviews = createAsyncThunk<
  void,
  Offer['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchReviews', async (offerId, { dispatch, extra: api }) => {
  dispatch(setLoadingStatus(true));
  const { data } = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
  dispatch(setLoadingStatus(false));
  dispatch(setOfferReviews(data));
});

export const fetchNearbyOffers = createAsyncThunk<
  void,
  Offer['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offer/fetchNearbyOffers', async (offerId, { dispatch, extra: api }) => {
  dispatch(setLoadingStatus(true));
  const { data } = await api.get<Offer[]>(
    `${APIRoute.Offers}/${offerId}${APIRoute.NearbyOffers}`
  );
  dispatch(setLoadingStatus(false));
  dispatch(setNearbyOffers(data));
});

export const login = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const { data } = await api.post<User>(APIRoute.Login, {
    email,
    password,
  });
  setToken(data.token);
  dispatch(requireAuthorization(AuthStatus.Auth));
  dispatch(redirectToRoute(AppRoute.Root));
  dispatch(setUserInfo(data));
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setUserInfo(null));
  dispatch(requireAuthorization(AuthStatus.NoAuth));
});

export const clearError = createAsyncThunk('app/setError', () => {
  setTimeout(() => {
    store.dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
});

export const sendReview = createAsyncThunk<
  void,
  ReviewData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'offer/sendreview',
  async ({ comment, rating, id }, { dispatch, getState, extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Reviews}/${id}`, {
      rating,
      comment,
    });
    const state = getState();
    dispatch(setOfferReviews([data, ...state.reviews]));
  }
);
