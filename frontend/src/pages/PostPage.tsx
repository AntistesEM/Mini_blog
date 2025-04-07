import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostPageProps } from '../types/types';

const PostPage: React.FC<PostPageProps> = ({ posts, addComment }) => {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find(p => p.id === Number(postId));
  const [currentComment, setCurrentComment] = useState<string>('');

  const handleCommentSubmit = () => {
    if (post && currentComment.trim() !== '') {
      addComment(post.id, currentComment);
      setCurrentComment('');
    }
  };

  if (!post) {
    return <div>Пост не найден.</div>;
  }

  return (
    <div className="container mt-4">
      <h1>{post.title}</h1>
      <h6 className="text-muted">{post.created_at}</h6>
      <p>{post.text}</p>

      <h5>Комментарии:</h5>
      <div>
        {post.comments.length ? (
          post.comments.map((comment, index) => (
            <div key={index} className="border p-2 mb-2">
              {comment}
            </div>
          ))
        ) : (
          <p>Комментариев пока нет.</p>
        )}
      </div>

      <div className="mb-3">
        <textarea
          rows={3}
          className="form-control"
          placeholder="Напишите комментарий..."
          value={currentComment}
          onChange={(e) => setCurrentComment(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleCommentSubmit}>
          Добавить комментарий
        </button>
      </div>
    </div>
  );
};

export default PostPage;
