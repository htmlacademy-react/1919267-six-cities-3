import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthStatus } from '../const';
import { Offer } from '../types/offer';
import { requireAuthorization, setOffers } from './action';
import { dropToken, setToken } from '../services/token';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';

export const fetchOffers = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(APIRoute.Offers);
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
    await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthStatus.Auth));
  } catch {
    dispatch(requireAuthorization(AuthStatus.NoAuth));
  }
});

export const login = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    setToken(token);
    dispatch(requireAuthorization(AuthStatus.Auth));
  }
);

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
  dispatch(requireAuthorization(AuthStatus.NoAuth));
});
