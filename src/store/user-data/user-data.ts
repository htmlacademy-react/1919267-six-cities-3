import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace, RequestStatus } from '../../const';
import { TUserData } from '../../types/state';
import { checkAuth, login, logout} from '../api-actions';

const initialState: TUserData = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  loginSendingStatus: RequestStatus.Idle
};


export const userData = createSlice({
  name: NameSpace.UserData,
  initialState,
  reducers: {
    setSendingStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.loginSendingStatus = action.payload;
    }
  },
  extraReducers (builder) {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.pending, (state) => {
        state.loginSendingStatus = RequestStatus.Loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginSendingStatus = RequestStatus.Success;
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.loginSendingStatus = RequestStatus.Error;
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const {setSendingStatus} = userData.actions;
