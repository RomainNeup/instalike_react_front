import React, { ReactElement } from 'react';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

export default function Post({ post, imageFull }: PostProps): ReactElement {
  return (
    <div className="w-full mb-8">
      <PostHeader user={post.user} />
      <PostBody post={post} imageFull={imageFull} />
      <PostFooter post={post} />
    </div>
  );
}
