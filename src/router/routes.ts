import {
  IndexView, LoginView, RegisterView, ComponentView,
} from '../views';

export default function getRoutes(): AppRoute[] {
  return [
    {
      path: '/',
      element: IndexView,
      loginRequired: true,
    },
    {
      path: '/login',
      element: LoginView,
      logoutRequired: true,
    },
    {
      path: '/register',
      element: RegisterView,
      logoutRequired: true,
    },
    {
      path: '/components',
      element: ComponentView,
    },
  ];
}
