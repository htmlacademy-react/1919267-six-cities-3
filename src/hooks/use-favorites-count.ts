import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { getToken } from '../services/token';
import {
  selectFavorites,
  selectFetchingFavoritesStatus,
} from '../store/favorites-data/selectors';
import { RequestStatus } from '../const';
import { fetchFavoriteOffers } from '../store/api-actions';

export const useFavoritesCount = () => {
  const dispatch = useAppDispatch();
  const favoritesStatus = useAppSelector(selectFetchingFavoritesStatus);
  const count = useAppSelector(selectFavorites).length;
  const token = getToken();

  useEffect(() => {
    if (favoritesStatus === RequestStatus.Idle && token) {
      dispatch(fetchFavoriteOffers());
    }
  }, [dispatch, favoritesStatus, token]);

  return count;
};
