import React, { ReactElement, useRef } from 'react';
import PostBody from './PostBody';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

export default function Post({ post, imageFull }: PostProps): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full">
      <PostHeader user={post.user} />
      <PostBody post={post} imageFull={imageFull} commentPost={() => inputRef.current?.focus()} />
      <PostFooter post={post} inputRef={inputRef} />
    </div>
  );
}
