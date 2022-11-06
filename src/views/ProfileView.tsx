import Image from '../components/base/Images/Image';
import { Link as ReactLink } from 'react-router-dom';
import React, { ReactElement } from 'react';
import UserInformations from '../components/elements/User/UserInformations';
import { useAppSelector } from '@/store/hooks';

export default function ProfileView(): ReactElement {
    const {informations} = useAppSelector((state) => state.user)
    return (
        <div className="w-full max-w-3xl content-center">
            <UserInformations user={informations} />
            <div className="grid grid-cols-3 gap-2 mt-4" v-if="user">
                <ReactLink
                to={""}
                v-for="post in user.posts"
                key="post._id"
      >
                <Image src="post.media.url" className="min-h-full" alt="" />
            </ReactLink>
        </div>
  </div >
    );
}
