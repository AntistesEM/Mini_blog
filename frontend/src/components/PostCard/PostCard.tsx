import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { PostCardProps } from '../../types/types';

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
