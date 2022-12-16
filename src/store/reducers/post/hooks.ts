import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import PostService from '../../../api/post/service';
import {
  addComment,
  addPost,
  deleteComment,
  deletePost,
  editComment,
  editPost,
  likePost,
  setPosts as dispatchPosts,
} from './reducer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useErrors from '../error/hooks';
import UploadService from '../../../api/upload/service';
import CommentService from '../../../api/comment/service';
import useUser from '../user/hooks';

interface UsePostsReturn {
  posts: Post[],
  loading: boolean,
}

export function usePost(id?: string) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { addError } = useErrors();
  const post = useAppSelector((state) => state.posts.find((p) => p.id === id));
  const { currentUser } = useUser();

  const getPost = () => {
    if (!id || post) return;
    PostService.getPost(id)
      .then((res) => dispatch(addPost(res)))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const createPost = (media: File, description: string) => UploadService.uploadMedia(media)
    .then((res) => PostService.createPost(res, description))
    .then((res) => dispatch(addPost(res)))
    .catch((err: AxiosError<ErrorResponse>) => {
      setLoading(false);
      if (err.response) {
        addError(err.response.data.error);
      }
    });

  const updatePost = (content: string) => {
    if (!post || !id) return;
    PostService.editPost(id, content)
      .then((res) => dispatch(editPost({ ...post, description: res.description })))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const removePost = () => {
    if (!id) return;
    PostService.deletePost(id)
      .then(() => dispatch(deletePost(id)))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const like = () => {
    if (!id) return;
    PostService.likePost(id)
      .then((res) => dispatch(likePost({ id, like: res })));
  };

  const commentPost = (text: string) => {
    if (!currentUser || !id) return Promise.resolve();
    return CommentService.saveComment(id, text)
      .then((res) => dispatch(addComment({
        ...res,
        user: currentUser,
      })))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  useEffect(getPost, [id, post, addError, dispatch]);

  return {
    post,
    createPost,
    updatePost,
    removePost,
    commentPost,
    likePost: like,
    loading,
  };
}

export function useComment(id?: string) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { addError } = useErrors();

  const edit = (text: string) => {
    if (!id) return;
    CommentService.editComment(id, text)
      .then((newComment) => dispatch(editComment(newComment)))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const removeComment = () => {
    if (!id) return Promise.resolve();
    return CommentService.deleteComment(id)
      .then(() => dispatch(deleteComment(id)))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  return {
    deleteComment: removeComment,
    editComment: edit,
    loading,
  };
}

export function usePosts(): UsePostsReturn {
  const user = useAppSelector((state) => state.user.informations);
  const [userId, setUserId] = useState<string>();
  const posts = useAppSelector((state) => state.posts);
  const [loading, setLoading] = useState<boolean>(false);
  const { addError } = useErrors();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) setUserId(user.id);
  }, [user]);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    PostService.getPosts()
      .then((res) => {
        dispatch(dispatchPosts(res.map<Post>((post): Post => ({
          ...post,
          user: {
            ...post.user,
            currentUser: post.user.id === userId,
          },
          comments: post.comments.map((comment) => ({
            ...comment,
            user: {
              ...comment.user,
              currentUser: comment.user.id === userId,
            },
          })),
        }))));
        setLoading(false);
      })
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  }, [userId, dispatch]);

  return {
    posts,
    loading,
  };
}
