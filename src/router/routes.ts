import {
  IndexView, LoginView, RegisterView, ComponentView,
} from '../views';

export default function getRoutes(): AppRoute[] {
  return [
    {
      path: '/',
      element: IndexView,
    },
    {
      path: '/login',
      element: LoginView,
    },
    {
      path: '/register',
      element: RegisterView,
    },
    {
      path: '/components',
      element: ComponentView,
    },
  ];
}
