import { PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { ACTION_TYPE_REDIRECT } from '../../const';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () => (next) => (action: PayloadAction<string>) => {
    if (action.type === ACTION_TYPE_REDIRECT) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
