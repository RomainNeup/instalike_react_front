interface Post {
    id: string;
    image: string;
    caption: string;
    likes: number;
}

interface PostBodyProps extends PostProps {
    className?: string;
}

interface PostProps {
    user: {
        username: string;
        avatar: string;
    };
    post: Post;
}

interface PostHeaderProps {
    username: string;
    avatar: string;
}