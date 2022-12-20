interface PostLayoutProps {
  user: User;
}

interface PostFooterProps {
  className?: string;
  user: {
    username: string;
    avatar: string;
  };
}

interface PostProps {
  className?: string;
  post: Post;
  imageFull?: boolean;
  commentPost?: () => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

interface PostCommentProps {
  className?: string;
  comment: PostComment;
}
