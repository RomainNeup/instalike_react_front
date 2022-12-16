import React, { ReactElement } from 'react';
import { Link as ReactLink, useParams } from 'react-router-dom';
import Image from '../components/base/Images/Image';
import UserInformations from '../components/elements/User/UserInformations';
import { useAppSelector } from '../store/hooks';
import NotFoundView from './utils/NotFoundView';
import LoadingView from './utils/LoadingView';
import Body from '../components/layout/Body';
import useUser from '../store/reducers/users/hooks';

export default function ProfileView(): ReactElement {
  const { informations } = useAppSelector((state) => state.user);
  const { username = informations?.username } = useParams<'username'>();
  const { user, loading } = useUser({ username });

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
