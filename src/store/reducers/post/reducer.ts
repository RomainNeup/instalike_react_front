import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Post[] = [];

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts(posts, action: PayloadAction<Post[]>): Post[] {
      return action.payload;
    },
    addPost(posts, action: PayloadAction<Post>): Post[] {
      const foundPost = posts.find((post) => post.id === action.payload.id);
      if (!foundPost) {
        return [action.payload, ...posts];
      }
      return posts;
    },
    editPost(posts, action: PayloadAction<Post>): Post[] {
      return posts.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      });
    },
    deletePost(posts, action: PayloadAction<string>): Post[] {
      return posts.filter((post) => post.id !== action.payload);
    },
    likePost(posts, action: PayloadAction<LikeAction>): void {
      const { id, like } = action.payload;
      const postIndex = posts.findIndex((post) => post.id === id);
      const postsCopy = posts;
      postsCopy[postIndex].isLiked = like;
      postsCopy[postIndex].likes += like ? 1 : -1;
    },
    followUser(posts, action: PayloadAction<FollowAction>): void {
      const { id, follow } = action.payload;
      posts.forEach((post) => {
        const postCopy = post;
        if (postCopy.user.id === id) {
          postCopy.user.isFollower = follow;
          if (postCopy.user.followers) {
            postCopy.user.followers += follow ? 1 : -1;
          }
        }
      });
    },
    addComment(posts, action: PayloadAction<PostComment>): void {
      const postIndex = posts.findIndex((post) => post.id === action.payload.post);
      const postCopy = posts[postIndex];
      postCopy.comments.push(action.payload);
    },
    editComment(posts, action: PayloadAction<PostComment>): void {
      const postCopy = posts.find((post) => post.id === action.payload.post);
      if (postCopy) {
        const commentIndex = postCopy.comments
          .findIndex((comment) => comment.id === action.payload.id);
        postCopy.comments[commentIndex].text = action.payload.text;
      }
    },
    deleteComment(posts, action: PayloadAction<PostComment>): void {
      const postCopy = posts.find((post) => post.id === action.payload.post);
      if (postCopy) {
        postCopy.comments = postCopy.comments
          .filter((comment) => comment.id !== action.payload.id);
      }
    },
  },
});

export const {
  setPosts,
  addPost,
  editPost,
  deletePost,
  likePost,
  followUser,
  addComment,
  editComment,
  deleteComment,
} = postSlice.actions;

export default postSlice.reducer;
