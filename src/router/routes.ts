import IndexView from '../views/IndexView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import ComponentView from '../views/ComponentView';

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
