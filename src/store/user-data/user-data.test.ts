import { AuthorizationStatus, RequestStatus } from '../../const';
import { makeFakeUser } from '../../test-mocks/test-mocks';
import { UserData } from '../../types/state';
import { login, logout } from '../api-actions';
import { setSendingStatus, userData } from './user-data';

describe('UserData Slice', () => {
  it('should return initial state while empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: UserData = {
      user: makeFakeUser(),
      authorizationStatus: AuthorizationStatus.Auth,
      loginSendingStatus: RequestStatus.Idle,
    };
    const result = userData.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state while empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: UserData = {
      user: null,
      authorizationStatus: AuthorizationStatus.Unknown,
      loginSendingStatus: RequestStatus.Idle,
    };
    const result = userData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change login sending status with successfull "login" action', () => {
    const initialState: UserData = {
      user: null,
      authorizationStatus: AuthorizationStatus.Unknown,
      loginSendingStatus: RequestStatus.Idle,
    };
    const expectedLoginStatus = RequestStatus.Success;
    const result = userData.reducer(
      initialState,
      setSendingStatus(RequestStatus.Success)
    );

    expect(result.loginSendingStatus).toBe(expectedLoginStatus);
  });

  it('should return "NoAuth" and "RequestStatus.Error" if login action failed', () => {
    const initialState: UserData = {
      user: null,
      authorizationStatus: AuthorizationStatus.Unknown,
      loginSendingStatus: RequestStatus.Idle,
    };

    const expectedState: UserData = {
      user: null,
      authorizationStatus: AuthorizationStatus.NoAuth,
      loginSendingStatus: RequestStatus.Error,
    };

    const result = userData.reducer(initialState, login.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should return "NoAuth" if is logged out', () => {
    const initialState: UserData = {
      user: makeFakeUser(),
      authorizationStatus: AuthorizationStatus.Auth,
      loginSendingStatus: RequestStatus.Idle,
    };

    const expectedState: UserData = {
      user: null,
      authorizationStatus: AuthorizationStatus.NoAuth,
      loginSendingStatus: RequestStatus.Idle,
    };

    const result = userData.reducer(initialState, logout.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
