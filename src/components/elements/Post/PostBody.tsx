import React from 'react';
import { Image, P, Icon } from '../..';

export function PostBody(props: PostBodyProps): JSX.Element {
  return (
    <div className={`${props.className}`}>
      <Image className="h-96 w-full" src={props.post.image} alt={props.post.caption} border="primary" />
      <div className="mt-4">
        <Icon name="favorite" className="text-secondary mr-2" />
        <Icon name="chat_bubble" className="text-secondary" />
        <P className="font-light">
          {props.post.likes}
          {' '}
          j'aime
        </P>
        <P className="font-light">
          <b className="font-bold">
            {props.user.username}
            {' '}
          </b>
          {props.post.caption}
        </P>
      </div>
    </div>
  );
}
