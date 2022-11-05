import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

export default function GuestRoute({ children }: MiddlewareChildProps): ReactElement {
  const { isLogged } = useAppSelector((state) => state.user);

  if (isLogged) {
    return <Navigate to="/" replace />;
  }

  return children;
}
