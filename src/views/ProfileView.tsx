import { Link as ReactLink, useParams } from 'react-router-dom';
import React, { ReactElement, useEffect } from 'react';
import Image from '../components/base/Images/Image';
import UserInformations from '../components/elements/User/UserInformations';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import NotFoundView from './utils/NotFoundView';
import UserService from '../api/user/service';
import { addUser } from '../store/reducers/users/reducer';
import LoadingView from './utils/LoadingView';
import Body from '../components/layout/Body';

export default function ProfileView(): ReactElement {
  const [loading, setLoading] = React.useState(true);
  const { informations } = useAppSelector((state) => state.user);
  const { username = informations?.username } = useParams<'username'>();
  const user = useAppSelector((state) => state.users.find((u) => u.username === username));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (username && !user) {
      UserService.getUser(username)
        .then((u) => {
          setLoading(false);
          dispatch(addUser({
            ...u,
            currentUser: u.id === informations?.id,
          }));
        });
    } else {
      setLoading(false);
    }
  }, [username, dispatch, user, informations]);

  if (loading) {
    return (
      <LoadingView />
    );
  }

  if (!user) {
    return (
      <NotFoundView pageName={`profil de ${username}`} />
    );
  }

  return (
    <Body size="large">
      <UserInformations user={user} />
      <div className="grid grid-cols-3 gap-2 mt-4">
        {user.posts?.map((post) => (
          <ReactLink
            to={`/post/${post.id}`}
            key={post.id}
          >
            <Image src={post.media?.url} className="min-h-full" alt={post.description} />
          </ReactLink>
        ))}
      </div>
    </Body>
  );
}
