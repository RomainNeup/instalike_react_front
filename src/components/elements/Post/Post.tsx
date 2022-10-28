import React from 'react';
import { PostBody, PostFooter, PostHeader } from '.';

export default function Post({ user, post }: PostProps): JSX.Element {
  return (
    <div className="w-full mb-8">
      <PostHeader username={user.username} avatar={user.avatar} />
      <PostBody post={post} user={user} className="mb-4" />
      <PostFooter className="mb-4" />
    </div>
  );
}
