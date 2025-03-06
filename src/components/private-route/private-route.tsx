import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { ReactElement } from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthStatus;
  children: ReactElement;
};

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps) {
  return authorizationStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.login} />
  );
}

export default PrivateRoute;
