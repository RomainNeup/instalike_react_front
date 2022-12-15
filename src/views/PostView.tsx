import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import Post from '../components/elements/Post/Post';
import NotFoundView from './utils/NotFoundView';
import Body from '../components/layout/Body';

export default function PostView(): ReactElement {
  const { id } = useParams<'id'>();
  const post = useAppSelector((state) => state.posts.find((p) => p.id === id));
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
