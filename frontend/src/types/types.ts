export interface Post {
  id: number;
  title: string;
  text: string;
  created_at: string;
  author: string;
  comments: string[];
}

interface PostsProps {
  posts: Post[];
}

export interface HomeProps extends PostsProps {
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export interface PostPageProps extends PostsProps {
  addComment: (postId: number, comment: string) => void;
}

interface PostActions {
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
}

export interface PostCardProps extends PostActions {
  post: Post;
}

export interface PostListProps extends PostActions {
  posts: Post[];
}

export interface PostModalBaseProps {
  show: boolean;
  title: string;
  author: string;
  text: string;
  onHide: () => void;
  onChangeTitle: (title: string) => void;
  onChangeAuthor: (author: string) => void;
  onChangeBody: (text: string) => void;
  onSubmit: () => void;
  modalTitle?: string; // Это свойство будет меняться в зависимости от модального окна
}
