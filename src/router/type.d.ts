interface AppRoute {
  path: string;
  element: () => JSX.Element;
  loginRequired?: boolean;
  logoutRequired?: boolean;
}
