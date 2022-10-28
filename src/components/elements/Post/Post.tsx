import React from 'react';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

export default function Post({ user, post }: PostProps): JSX.Element {
  return (
    <div className="w-full mb-8">
      <PostHeader username={user.username} avatar={user.avatar} />
      <PostBody post={post} user={user} className="mb-4" />
      <PostFooter className="mb-4" user={user} />
    </div>
  );
}
