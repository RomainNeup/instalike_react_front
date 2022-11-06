import React, { ReactElement } from 'react';
import GuestRoute from './GuestRoute';
import ProtectedRoute from './ProtectedRoute';

export default function Middleware({
  children,
  loginRequired,
  logoutRequired,
}: MiddlewareProps): ReactElement {
  if (loginRequired) {
    return <ProtectedRoute>{children}</ProtectedRoute>;
  }
  if (logoutRequired) {
    return <GuestRoute>{children}</GuestRoute>;
  }
  return children;
}
