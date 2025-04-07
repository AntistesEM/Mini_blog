import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Post } from './types/types';
import PostPage from './pages/PostPage';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const addComment = (postId: number, comment: string) => {
    if (comment.trim() === '') return;
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <Routes>
      <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
      <Route path="/posts/:postId" element={<PostPage posts={posts} addComment={addComment} />} />
    </Routes>
  );
};

export default App;
