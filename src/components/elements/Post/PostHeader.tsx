import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ReactLink } from 'react-router-dom';
import Button from '../../base/Buttons/Button';
import Image from '../../base/Images/Image';
import P from '../../base/Texts/P';
import useUser from '../../../store/reducers/users/hooks';

export default function PostHeader({ user }: PostLayoutProps): ReactElement {
  const { t } = useTranslation('user');
  const { followUser } = useUser({ id: user.id });

  return (
    <div className="flex flex-row space-x-4 mb-4">
      <div className="w-16 h-16">
        <ReactLink to={`/profile/${user.username}`}>
          <Image src={user.media?.url} alt={user.username} border="secondary" round />
        </ReactLink>
      </div>
      <div>
        <P className="flex-none">{user.username}</P>
        {
          user.currentUser ? (
            <Button size="small" to="/profile">
              {t('profile')}
            </Button>
          ) : (
            <Button size="small" onClick={followUser} plain={!user.isFollower}>
              {user.isFollower ? t('action.unfollow') : t('action.follow')}
            </Button>
          )
        }
      </div>
    </div>
  );
}
