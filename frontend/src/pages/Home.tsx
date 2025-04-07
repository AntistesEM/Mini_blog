import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { PostModal } from '../components/PostModal';
import { EditPostModal } from '../components/EditPostModal';
import { PostList } from '../components/PostList';
import { HomeProps, Post } from '../types/types';

const Home: React.FC<HomeProps> = ({ posts, setPosts }) => {
  const [showPostModal, setShowPostModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [newPost, setNewPost] = useState<{ title: string; author: string; text: string }>({ title: '', author: '', text: '' });
  const [editPost, setEditPost] = useState<{ title: string; author: string; text: string } | null>(null);

  const handleShowPostModal = () => setShowPostModal(true);
  const handleClosePostModal = () => setShowPostModal(false);

  const handleShowEditModal = () => {
    if (selectedPost) {
      setEditPost({ title: selectedPost.title, author: selectedPost.author, text: selectedPost.text });
    }
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setEditPost(null);
    setShowEditModal(false);
  };

  const addPost = () => {
    const newId = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const post: Post = {
      id: newId,
      title: newPost.title,
      author: newPost.author,
      text: newPost.text,
      created_at: new Date().toLocaleString(),
      comments: [],
    };
    setPosts([...posts, post]);
    setNewPost({ title: '', author: '', text: '' });
    handleClosePostModal();
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const updatePost = () => {
    if (!selectedPost) return;
    const updatedPosts = posts.map(post =>
      post.id === selectedPost.id ? { ...post, title: editPost!.title, text: editPost!.text } : post
    );
    setPosts(updatedPosts);
    handleCloseEditModal();
  };

  return (
    <div className="container mt-4">
      <h1>Список постов</h1>
      <Button variant="primary" onClick={handleShowPostModal}>Добавить пост</Button>

      <PostList posts={posts} onEdit={(post) => { setSelectedPost(post); handleShowEditModal(); }} onDelete={deletePost} />

      <PostModal 
        show={showPostModal} 
        onHide={handleClosePostModal}
        title={newPost.title}
        author={newPost.author}
        text={newPost.text}
        onChangeTitle={(title) => setNewPost(prev => ({ ...prev, title }))}
        onChangeAuthor={(author) => setNewPost(prev => ({ ...prev, author }))}
        onChangeBody={(text) => setNewPost(prev => ({ ...prev, text }))}
        onSubmit={addPost} 
      />

      <EditPostModal 
        show={showEditModal} 
        onHide={handleCloseEditModal}
        title={editPost?.title || ''}
        author={editPost?.author || ''}
        text={editPost?.text || ''}
        onChangeTitle={(title) => setEditPost(prev => ({ ...prev!, title }))}
        onChangeAuthor={(author) => setEditPost(prev => ({ ...prev!, author }))}
        onChangeBody={(text) => setEditPost(prev => ({ ...prev!, text }))}
        onSubmit={updatePost} 
      />
    </div>
  );
};

export default Home;
