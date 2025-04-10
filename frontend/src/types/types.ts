export interface Comment {
  id: number;
  text: string;
  author: string;
  created_at?: string;
}

export interface Post {
  id: number;
  title: string;
  text: string;
  created_at?: string;
  author: string;
  comments?: Comment[];
}

export interface PostActions {
  onEdit: () => void;
  // eslint-disable-next-line no-unused-vars
  onDelete: (id: number) => void;
}

export interface PostCardProps extends PostActions {
  post: Post;
}

export interface PostModalBaseProps {
  show: boolean;
  title: string | undefined;
  author: string | undefined;
  text: string | undefined;
  onHide: () => void;
  // eslint-disable-next-line no-unused-vars
  onChangeTitle: (title: string) => void;
  // eslint-disable-next-line no-unused-vars
  onChangeAuthor: (author: string) => void;
  // eslint-disable-next-line no-unused-vars
  onChangeBody: (text: string) => void;
  onSubmit: () => void;
  modalTitle?: string; // Это свойство будет меняться в зависимости от модального окна
}
