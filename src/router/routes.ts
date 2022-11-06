import IndexView from '../views/IndexView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import ComponentView from '../views/ComponentView';
import PublishView from '../views/PublishView';
import ProfileView from '../views/ProfileView';

export default function getRoutes(): AppRoute[] {
  return [
    {
      path: '/',
      Element: IndexView,
      loginRequired: true,
    },
    {
      path: '/login',
      Element: LoginView,
      logoutRequired: true,
    },
    {
      path: '/register',
      Element: RegisterView,
      logoutRequired: true,
    },
    {
      path: '/publish',
      Element: PublishView,
      loginRequired: true,
    },
    {
      path: '/profile/:username',
      Element: ProfileView,
      loginRequired: true,
    },
    {
      path: '/profile',
      Element: ProfileView,
      loginRequired: true,
    },
    {
      path: '/components',
      Element: ComponentView,
    },
  ];
}
