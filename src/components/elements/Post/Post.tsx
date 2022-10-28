import React from 'react';
import { PostBody } from './PostBody';
import { PostFooter } from './PostFooter';
import { PostHeader } from './PostHeader';

export function Post(props: PostProps): JSX.Element {
  return (
    <div className="w-full mb-8">
      <PostHeader username={props.user.username} avatar={props.user.avatar} />
      <PostBody {...props} className="mb-4" />
      <PostFooter {...props} className="mb-4" />
    </div>
  );
}
