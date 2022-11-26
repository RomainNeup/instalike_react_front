import { Link as ReactLink, useParams } from 'react-router-dom';
import React, { ReactElement, useEffect } from 'react';
import Image from '../components/base/Images/Image';
import UserInformations from '../components/elements/User/UserInformations';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import NotFoundView from './utils/NotFoundView';
import userService from '../api/user/service';
import { addUser } from '../store/reducers/users/reducer';
import LoadingView from './utils/LoadingView';

export default function ProfileView(): ReactElement {
  const [loading, setLoading] = React.useState(true);
  const { informations } = useAppSelector((state) => state.user);
  const { username = informations?.username } = useParams<'username'>();
  const user = useAppSelector((state) => state.users.find((u) => u.username === username));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (username && !user) {
      userService.getUser(username)
        .then((u) => {
          setLoading(false);
          dispatch(addUser({
            ...u,
            currentUser: u._id === informations?._id,
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
    <div className="w-full max-w-3xl content-center">
      <UserInformations user={user} />
      <div className="grid grid-cols-3 gap-2 mt-4">
        {user.posts?.map((post) => (
          <ReactLink
            to={`/post/${post._id}`}
            key={post._id}
          >
            <Image src={post.media?.url} className="min-h-full" alt={post.description} />
          </ReactLink>
        ))}
      </div>
    </div>
  );
}
