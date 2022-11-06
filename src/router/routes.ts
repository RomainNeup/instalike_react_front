import IndexView from '../views/IndexView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import ComponentView from '../views/ComponentView';
import PublishView from '../views/PublishView';

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
      path: '/publish',
      element: PublishView,
      loginRequired: true,
    },
    {
      path: '/components',
      element: ComponentView,
    },
  ];
}
