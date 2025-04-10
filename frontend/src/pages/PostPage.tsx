import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import API_BASE_URL from '../config';
import { Post } from '../types/types';

const PostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [currentComment, setCurrentComment] = useState<string>('');

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<Post>(
          `${API_BASE_URL}/api/posts/${postId}/`
        );
        if (response.data) {
          setPost(response.data);
        } else {
          setPost(undefined);
        }
      } catch (error) {
        console.error('Ошибка при получении постов:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const handleCommentSubmit = async () => {
    if (currentComment.trim() === '') return;
    try {
      const response = await axios.post(`${API_BASE_URL}/api/comments/`, {
        post: postId,
        text: currentComment,
      });

      const newComment = response.data;

      if (post) {
        setPost({
          ...post,
          comments: post.comments
            ? [...post.comments, newComment]
            : [newComment],
        });
      }

      setCurrentComment('');
    } catch (error) {
      console.error('Ошибка при добавлении комментария:', error);
    }
  };

  return (
    <div className="container mt-4">
      {isLoading && <div>Загрузка...</div>}
      {post ? (
        <>
          <h1>{post.title}</h1>
          <h6 className="text-muted">
            {new Date(post.created_at!).toLocaleString()}
          </h6>
          <p>{post.text}</p>

          <h5>Комментарии:</h5>
          <div>
            {post.comments && post.comments.length > 0 ? (
              post.comments.map((comment) => (
                <div key={comment.id} className="border p-2 mb-2">
                  <p>
                    <strong>
                      {new Date(comment.created_at!).toLocaleString()}:{' '}
                    </strong>
                  </p>
                  {comment.text}
                </div>
              ))
            ) : (
              <p>Комментариев пока нет.</p>
            )}
          </div>
        </>
      ) : (
        <div>Пост не найден.</div>
      )}

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
