import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { PostCardProps } from '../../types/types';

/**
 * Компонента для отображения карточки поста.
 * Этот компонент показывает заголовок, дату создания, автора и текст поста в виде карточки.
 * Также включает кнопки для редактирования и удаления поста, а также ссылку для просмотра полного поста.
 *
 * @component
 * @param {Object} props - Свойства компоненты.
 * @param {Object} props.post - Объект поста, содержащий информацию о посте.
 * @param {string} props.post.title - Заголовок поста.
 * @param {string} props.post.text - Текст поста.
 * @param {string} props.post.author - Автор поста.
 * @param {string} props.post.created_at - Дата создания поста в виде строки.
 * @param {function} props.onEdit - Функция обратного вызова для редактирования поста.
 * @param {function} props.onDelete - Функция обратного вызова для удаления поста.
 * @returns {JSX.Element} Возвращает отрисованную карточку поста.
 * @example
 * // Использование компоненты PostCard
 * import { PostCard } from './PostCard';
 * function App() {
 *   const handleEdit = () => {
 *     // Логика редактирования поста
 *   };
 *   const handleDelete = (postId) => {
 *     // Логика удаления поста
 *   };
 *   const post = {
 *     id: 1,
 *     title: 'Заголовок поста',
 *     text: 'Текст поста...',
 *     author: 'Автор',
 *     created_at: '2023-10-01T12:00:00Z'
 *   };
 *   return (
 *     <PostCard post={post} onEdit={handleEdit} onDelete={handleDelete} />
 *   );
 * }
 */
export const PostCard: React.FC<PostCardProps> = ({
  post,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {new Date(post.created_at!).toLocaleString()}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">{post.author}</h6>
        <p className="card-text">
          {post.text.slice(0, 100)}
          {post.text.length > 100 ? '...' : ''}
        </p>
        <Link to={`/posts/${post.id}`} className="btn btn-link">
          Читать
        </Link>
        <Button variant="info" onClick={() => onEdit()}>
          Редактировать пост
        </Button>
        <Button
          variant="danger"
          className="position-absolute end-0 top-0 m-2 rounded-circle"
          style={{ width: '40px', height: '40px' }}
          onClick={() => onDelete(post.id)}
        >
          <FaTimes />
        </Button>
      </div>
    </div>
  );
};
