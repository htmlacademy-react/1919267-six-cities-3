import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const selectAuthorizationStatus = (state: State) =>
  state[NameSpace.UserData].authorizationStatus;
export const selectSendingStatus = (state: State) =>
  state[NameSpace.UserData].loginSendingStatus;
export const selectUserData = (state: State) => state[NameSpace.UserData].user;
