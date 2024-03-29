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
import useCurrentUser from '../user/hooks';
import useUser from '../users/hooks';

interface UsePostsReturn {
  posts: Post[],
  loading: boolean,
}

export function usePost(id?: string) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { addError } = useErrors();
  const post = useAppSelector((state) => state.posts.find((p) => p.id === id));
  const { currentUser } = useCurrentUser();
  const { addPostToUser, deletePostFromUser, editPostFromUser } = useUser({});

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
    .then((res) => {
      addPostToUser(res);
      dispatch(addPost(res));
      setLoading(false);
    })
    .catch((err: AxiosError<ErrorResponse>) => {
      setLoading(false);
      if (err.response) {
        addError(err.response.data.error);
      }
    });

  const updatePost = (content: string) => {
    if (!post || !id) return;
    PostService.editPost(id, content)
      .then((res) => {
        setLoading(false);
        dispatch(editPost({ ...post, description: res.description }));
        editPostFromUser({ ...post, description: res.description });
      })
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const removePost = () => {
    setLoading(true);
    if (!id) return;
    PostService.deletePost(id)
      .then(() => {
        setLoading(false);
        dispatch(deletePost(id));
        deletePostFromUser(id);
      })
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

export function useComment(comment: PostComment | undefined) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { addError } = useErrors();

  const edit = (text: string) => {
    if (!comment?.id) return;
    CommentService.editComment(comment.id, text)
      .then((newComment) => dispatch(editComment({
        ...comment,
        text: newComment.text,
      })))
      .catch((err: AxiosError<ErrorResponse>) => {
        setLoading(false);
        if (err.response) {
          addError(err.response.data.error);
        }
      });
  };

  const removeComment = () => {
    if (!comment?.id) return Promise.resolve();
    return CommentService.deleteComment(comment.id)
      .then(() => dispatch(deleteComment(comment.id)))
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
  const { addError } = useErrors();
  const [error, setError] = useState<ErrorType | null>(null);
  const { currentUser } = useCurrentUser();
  const posts = useAppSelector((state) => state.posts);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const getPosts = () => {
    if (currentUser) {
      setLoading(true);
      PostService.getPosts()
        .then((res) => {
          dispatch(dispatchPosts(res.slice().reverse().map<Post>((post): Post => ({
            ...post,
            user: {
              ...post.user,
              currentUser: post.user.id === currentUser.id,
            },
            comments: post.comments.slice(0).reverse().map((comment) => ({
              ...comment,
              user: {
                ...comment.user,
                currentUser: comment.user.id === currentUser.id,
              },
            })),
          }))));
          setLoading(false);
        })
        .catch((err: AxiosError<ErrorResponse>) => {
          setLoading(false);
          if (err.response) {
            setError(err.response.data.error);
          }
        });
    }
  };

  useEffect(() => {
    if (error) {
      addError(error);
      setError(null);
    }
  }, [error, addError]);

  useEffect(getPosts, [currentUser, dispatch]);

  return {
    posts,
    loading,
  };
}
