import { createSelector } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectAuthorizationStatus = createSelector(
  (state: State) => state[NameSpace.UserData],
  (state) => state.authorizationStatus
);
export const selectSendingStatus = createSelector(
  (state: State) => state[NameSpace.UserData],
  (state) => state.loginSendingStatus
);
export const selectUserData = createSelector(
  (state: State) => state[NameSpace.UserData],
  (state) => state.user
);
