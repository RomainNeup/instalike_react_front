import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Image from '../../base/Images/Image';
import P from '../../base/Texts/P';
import H2 from '../../base/Titles/H2';
import Button from '../../base/Buttons/Button';
import useUser from '../../../store/reducers/users/hooks';
import Icon from '../../base/Icons/Icon';

export default function UserInformations({ user }: UserInformationProps): ReactElement {
  const { t } = useTranslation('user');
  const { followUser } = useUser({ id: user.id });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="w-24 h-24">
          <Image src={user.media?.url} alt={user.username} round />
        </div>
        <div className="grow flex justify-between max-w-lg pl-8">
          <div className="text-center">
            <P>
              <b className="font-black">{user.posts?.length}</b>
              <br />
              {t('information.posts', { count: user.posts?.length })}
            </P>
          </div>
          <div className="text-center">
            <P>
              <b className="font-black">{user.followers}</b>
              <br />
              {t('information.followers', { count: user.followers })}
            </P>
          </div>
          <div className="text-center">
            <P>
              <b className="font-black">{user.following}</b>
              <br />
              {t('information.following', { count: user.following })}
            </P>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div className="flex justify-between">
          <H2>{user.username}</H2>
          {
            user.currentUser ? (
              <Button v-else className="w-1/3" to="/account/edit">
                <Icon name="edit" className="mr-2" />
                {t('action.edit')}
              </Button>
            ) : (
              <Button
                onClick={followUser}
                className="w-1/3"
                plain={!user.isFollower}
              >
                <Icon name={user.isFollower ? 'check' : 'person_add'} className="mr-2" />
                {user.isFollower ? t('action.unfollow') : t('action.follow')}
              </Button>
            )
          }
        </div>
        <P>
          {user.description}
        </P>
      </div>
    </div>
  );
}
