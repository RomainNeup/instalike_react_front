import React from 'react';
import Icon from '../../base/Icons/Icon';
import P from '../../base/Texts/P';
import Image from '../../base/Images/Image';

export default function PostBody({ post, user, className }: PostBodyProps): JSX.Element {
  return (
    <div className={`${className}`}>
      <Image className="h-96 w-full" src={post.image} alt={post.caption} border="primary" />
      <div className="mt-4">
        <Icon name="favorite" className="text-secondary mr-2" />
        <Icon name="chat_bubble" className="text-secondary" />
        <P className="font-light">
          {post.likes}
          {' '}
          j'aime
        </P>
        <P className="font-light">
          <b className="font-bold">
            {user.username}
            {' '}
          </b>
          {post.caption}
        </P>
      </div>
    </div>
  );
}
