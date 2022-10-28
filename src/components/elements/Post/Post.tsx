import React from 'react';
import { PostBody, PostFooter, PostHeader } from '.';

export default function Post(props: PostProps): JSX.Element {
  return (
    <div className="w-full mb-8">
      <PostHeader username={props.user.username} avatar={props.user.avatar} />
      <PostBody {...props} className="mb-4" />
      <PostFooter {...props} className="mb-4" />
    </div>
  );
}
