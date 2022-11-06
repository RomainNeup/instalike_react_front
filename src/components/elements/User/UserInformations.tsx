import React, { ReactElement } from 'react';
import Image from '../../base/Images/Image';
import P from '../../base/Texts/P';
import H2 from '../../base/Titles/H2';
import Button from '../../base/Buttons/Button';
import { useAppDispatch } from '../../../store/hooks';
import userService from '../../../api/user/service';
import { followUser } from '../../../store/reducers/post/reducer';

export default function UserInformations({ user }: UserInformationProps): ReactElement {
    const dispatch = useAppDispatch();
    const handleFollow = () => {
        userService.followUser(user._id)
            .then((isFollowed) => dispatch(followUser({ _id: user._id, isFollowed })));
    };
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="w-24 h-24">
                    <Image src="user.media ? user.media.url : placeholder" alt='' round />
                </div>
                <div className="grow flex justify-between max-w-lg pl-8">
                    <div className="text-center">
                        <P>
                            <b className="font-black">{user.posts?.length}</b>
                            Publication{user.posts && user.posts.length > 1 ? "s" : ""}
                        </P>
                    </div>
                    <div className="text-center">
                        <P>
                            <b className="font-black">{user.followers}</b>
                            Follower{user.followers && user.followers > 1 ? "s" : ""}
                        </P>
                    </div>
                    <div className="text-center">
                        <P>
                            <b className="font-black">{user.following}</b>
                            Suivi(e){user.following && user.following > 1 ? "s" : ""}
                        </P>
                    </div>
                </div>
            </div>
            <div className="mt-4 space-y-4">
                <div className="flex justify-between">
                    <H2>{user.username}</H2>
                    <Button
                        onClick={ handleFollow }
                        className="w-1/3"
                        plain={ !user.isFollower }
                    >
                        {user.isFollower ? "Suivi(e)" : "S'abonner"}
                    </Button>
                    <Button v-else className="w-1/3" to="/account/edit">
                        Editer le profil
                    </Button>
                </div>
                <P>
                    {user.description}
                </P>
            </div>
        </div>
    );
}