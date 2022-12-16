import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../components/elements/Post/Post';
import NotFoundView from './utils/NotFoundView';
import Body from '../components/layout/Body';
import { usePost } from '../store/reducers/post/hooks';

export default function PostView(): ReactElement {
  const { id } = useParams<'id'>();
  const { post } = usePost(id);

  if (!post) {
    return (
      <NotFoundView pageName={`post ${id}`} />
    );
  }
  return (
    <Body size="small">
      <Post post={post} imageFull />
    </Body>
  );
}
