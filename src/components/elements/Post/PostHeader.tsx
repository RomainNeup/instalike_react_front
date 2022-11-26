import React, { ReactElement } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import Button from '../../base/Buttons/Button';
import Image from '../../base/Images/Image';
import P from '../../base/Texts/P';
import { useAppDispatch } from '../../../store/hooks';
import UserService from '../../../api/user/service';
import { followUser as followUserUsersAction } from '../../../store/reducers/post/reducer';
import { followUser as followUserPostAction } from '../../../store/reducers/users/reducer';

export default function PostHeader({ user }: PostLayoutProps): ReactElement {
  const dispatch = useAppDispatch();
  const handleFollow = () => {
    UserService.followUser(user._id)
      .then((follow) => {
        dispatch(followUserPostAction({ _id: user._id, follow }));
        dispatch(followUserUsersAction({ _id: user._id, follow }));
      });
  };

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
              Mon profil
            </Button>
          ) : (
            <Button size="small" onClick={handleFollow} plain={!user.isFollower}>
              {user.isFollower ? 'Suivi(e)' : 'S\'abonner'}
            </Button>
          )
        }
      </div>
    </div>
  );
}
