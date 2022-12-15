import React, { ReactElement } from 'react';
import Body from '../components/layout/Body';
import Post from '../components/elements/Post/Post';
import usePosts from '../hooks/Posts';

export default function IndexView(): ReactElement {
  const { posts } = usePosts();

  return (
    <Body size="medium">
      {posts.map((post) => (<Post key={post.id} post={post} />))}
    </Body>
  );
}
