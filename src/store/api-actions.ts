import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosError, AxiosInstance } from 'axios';
import { Offer } from '../types/offer';
import { TLoginData } from '../types/login-data';
import { TUser } from '../types/user';
import { APIRoute, AppRoute, HttpStatus } from '../const';
import { setToken, dropToken } from '../services/token';
import { ReviewData, Review } from '../types/review';
import { UpdateFavoriteStatus } from '../types/update-favorite-status';
import { redirectToRoute } from './action';

type Extra = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}

export const fetchOffers = createAsyncThunk<Offer[], undefined, Extra>(
  'offers/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchActiveOffer = createAsyncThunk<Offer, Offer['id'], Extra>(
  'offer/fetchActiveOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Review[], Offer['id'], Extra>(
  'offer/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  }
);

export const fetchNearbyOffers = createAsyncThunk<Offer[], Offer['id'], Extra>(
  'nearbyOffers/fetchNearbyOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}${APIRoute.NearbyOffers}`);
    return data;
  }
);

export const sendReview = createAsyncThunk<Review, ReviewData, Extra>(
  'offer/sendReview',
  async ({comment, rating, id}, {extra: api}) => {
    const {data} = await api.post<Review>(
      `${APIRoute.Reviews}/${id}`,
      {comment, rating}
    );
    return data;
  }
);

export const fetchFavoriteOffers = createAsyncThunk<Offer[], undefined, Extra>(
  'favorites/fetchFavoriteOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

export const updateFavoriteStatus = createAsyncThunk<Offer, UpdateFavoriteStatus, Extra>(
  'favorites/updateFavoriteStatus',
  async ({id, status}, {extra: api}) => {
    const {data} = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  }
);

export const checkAuth = createAsyncThunk<TUser, undefined, Extra>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TUser>(APIRoute.Login);
    return data;
  }
);

export const login = createAsyncThunk<TUser, TLoginData, Extra>(
  'user/login',
  async ({email, password}, {extra: api, rejectWithValue, dispatch}) => {
    try {
      const {data} = await api.post<TUser>(APIRoute.Login, {email, password});
      setToken(data.token);
      dispatch(redirectToRoute(AppRoute.Root));
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && error.response.status === HttpStatus.BadRequest) {
          return rejectWithValue('Bad Request: Some data is missing or invalid.');
        } else {
          return rejectWithValue('An error accured while logging in');
        }
      } else {
        return rejectWithValue('Unknown error during login.');
      }
    }
  },
);

export const logout = createAsyncThunk<void, undefined, Extra>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
