interface MiddlewareChildProps {
  children: React.ReactElement;
}

interface MiddlewareProps extends MiddlewareChildProps {
  loginRequired?: boolean;
  logoutRequired?: boolean;
}
