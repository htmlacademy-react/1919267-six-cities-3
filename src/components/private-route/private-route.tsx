import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { ReactNode } from 'react';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: ReactNode;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  return authorizationStatus === AuthStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
