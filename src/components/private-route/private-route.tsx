import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { ReactNode } from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthStatus;
  children: ReactNode;
};

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps) {
  return authorizationStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.login} />
  );
}

export default PrivateRoute;
