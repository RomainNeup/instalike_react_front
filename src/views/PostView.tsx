import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import Post from '../components/elements/Post/Post';
import NotFoundView from './utils/NotFoundView';

export default function PostView(): ReactElement {
  const { id } = useParams<'id'>();
  const post = useAppSelector((state) => state.posts.find((p) => p._id === id));
  if (!post) {
    return (
      <NotFoundView pageName={`post ${id}`} />
    );
  }
  return (
    <div className="w-full max-w-2xl content-center">
      <Post post={post} imageFull />
    </div>
  );
}
