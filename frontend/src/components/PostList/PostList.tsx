import React from 'react';
import { PostCard } from '../PostCard';
import { PostListProps } from '../../types/types';

export const PostList: React.FC<PostListProps> = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="mt-4">
      {posts.map(post => (
        <PostCard key={post.id} post={post} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};
