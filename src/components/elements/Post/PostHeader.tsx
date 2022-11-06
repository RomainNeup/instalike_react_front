import React, { ReactElement } from 'react';
import Button from '../../base/Buttons/Button';
import Image from '../../base/Images/Image';
import P from '../../base/Texts/P';
import { useAppDispatch } from '../../../store/hooks';
import userService from '../../../api/user/service';
import { followUser } from '../../../store/reducers/post/reducer';

export default function PostHeader({ user }: PostLayoutProps): ReactElement {
  const dispatch = useAppDispatch();
  const handleFollow = () => {
    userService.followUser(user._id)
      .then((isFollowed) => dispatch(followUser({ _id: user._id, isFollowed })));
  };

  return (
    <div className="flex flex-row space-x-4 mb-4">
      <div className="w-16 h-16">
        <Image src={user.media?.url} alt={user.username} border="secondary" round />
      </div>
      <div>
        <P className="flex-none">{user.username}</P>
        <Button size="small" onClick={handleFollow} plain={!user.isFollower}>
          {user.isFollower ? 'Suivi(e)' : 'S\'abonner'}
        </Button>
      </div>
    </div>
  );
}
