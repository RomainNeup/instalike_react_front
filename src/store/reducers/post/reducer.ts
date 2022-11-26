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
      const foundPost = posts.find((post) => post._id === action.payload._id);
      if (!foundPost) {
        return [action.payload, ...posts];
      }
      return posts;
    },
    editPost(posts, action: PayloadAction<Post>): Post[] {
      return posts.map((post) => {
        if (post._id === action.payload._id) {
          return action.payload;
        }
        return post;
      });
    },
    deletePost(posts, action: PayloadAction<string>): Post[] {
      return posts.filter((post) => post._id !== action.payload);
    },
    likePost(posts, action: PayloadAction<LikeAction>): void {
      const { _id, like } = action.payload;
      const postIndex = posts.findIndex((post) => post._id === _id);
      const postsCopy = posts;
      postsCopy[postIndex].isLiked = like;
      postsCopy[postIndex].likes += like ? 1 : -1;
    },
    followUser(posts, action: PayloadAction<FollowAction>): void {
      const { _id, follow } = action.payload;
      posts.forEach((post) => {
        const postCopy = post;
        if (postCopy.user._id === _id) {
          postCopy.user.isFollower = follow;
          if (postCopy.user.followers) {
            postCopy.user.followers += follow ? 1 : -1;
          }
        }
      });
    },
    addComment(posts, action: PayloadAction<PostComment>): void {
      const postIndex = posts.findIndex((post) => post._id === action.payload.post);
      const postCopy = posts[postIndex];
      postCopy.comments.push(action.payload);
    },
    editComment(posts, action: PayloadAction<PostComment>): void {
      const postCopy = posts.find((post) => post._id === action.payload.post);
      if (postCopy) {
        const commentIndex = postCopy.comments
          .findIndex((comment) => comment._id === action.payload._id);
        postCopy.comments[commentIndex].text = action.payload.text;
      }
    },
    deleteComment(posts, action: PayloadAction<PostComment>): void {
      const postCopy = posts.find((post) => post._id === action.payload.post);
      if (postCopy) {
        postCopy.comments = postCopy.comments
          .filter((comment) => comment._id !== action.payload._id);
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
