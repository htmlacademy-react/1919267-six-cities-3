import { Location, Navigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { ReactNode } from 'react';
import { selectUserData } from '../../store/user-data/selectors';
import { useAppSelector } from '../../hooks';

type ProtectedRouteProps = {
  publicRoute?: boolean;
  children: ReactNode;
};

type FromState = {
  from?: Location;
};

export default function ProtectedRoute({
  publicRoute,
  children,
}: ProtectedRouteProps) {
  const location: Location<FromState> = useLocation() as Location<FromState>;

  const user = useAppSelector(selectUserData);

  if (user && publicRoute) {
    const from = location.state?.from || { pathname: AppRoute.Root };
    return <Navigate to={from} />;
  }

  if (!user && !publicRoute) {
    return <Navigate to={AppRoute.Login} state={{ from: location }} />;
  }

  return children;
}
