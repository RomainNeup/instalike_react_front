import IndexView from '../views/IndexView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import ComponentView from '../views/ComponentView';
import PublishView from '../views/PublishView';
import ProfileView from '../views/ProfileView';
import PostView from '../views/PostView';
import EditProfileView from '../views/EditProfileView';
import ChatView from '../views/ChatView';

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
      path: '/post/:id',
      Element: PostView,
      loginRequired: true,
    },
    {
      path: '/account/edit',
      Element: EditProfileView,
      loginRequired: true,
    },
    {
      path: '/chat/:id',
      Element: ChatView,
      loginRequired: true,
    },
    {
      path: '/chat',
      Element: ChatView,
      loginRequired: true,
    },
    {
      path: '/components',
      Element: ComponentView,
    },
  ];
}
