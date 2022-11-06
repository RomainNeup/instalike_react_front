import React, { ReactElement } from 'react';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

export default function Post({ post }: PostProps): ReactElement {
  return (
    <div className="w-full mb-8">
      <PostHeader user={post.user} />
      <PostBody post={post} />
      <PostFooter post={post} />
    </div>
  );
}
