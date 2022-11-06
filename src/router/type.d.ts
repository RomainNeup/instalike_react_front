interface AppRoute {
  path: string;
  Element: () => React.ReactElement;
  loginRequired?: boolean;
  logoutRequired?: boolean;
}
