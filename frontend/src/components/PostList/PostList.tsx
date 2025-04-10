import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {
  IoArrowBack,
  IoArrowForward,
  IoClose,
  IoSearch,
} from 'react-icons/io5';
import { useDebounce } from 'use-debounce';

import API_BASE_URL from '../../config';
import { Post } from '../../types/types';
import { PostCard } from '../PostCard';
import { PostModalBase } from '../PostModalBase';

export const PostList: React.FC = () => {
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [showPostModal, setShowPostModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 1000);

  const handleShowPostModal = (post?: Post) => {
    setCurrentPost(
      post ? { ...post } : { id: 0, title: '', author: '', text: '' }
    );
    setShowPostModal(true);
  };

  const handleClosePostModal = () => setShowPostModal(false);

  const fetchPosts = async (search: string = '', url?: string) => {
    try {
      setLoading(true);
      const response = url
        ? await axios.get(url)
        : await axios.get(`${API_BASE_URL}/api/posts/?search=${search}`);
      setPosts(response.data.results);

      setNextPage(response.data.next);
      setPreviousPage(response.data.previous);
    } catch (error) {
      console.error('Ошибка при получении постов:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    fetchPosts(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  const onDelete = async (id: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/posts/${id}/`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Ошибка при удалении поста:', error);
    }
  };

  const addPost = async () => {
    try {
      await axios.post(`${API_BASE_URL}/api/posts/`, currentPost);
      fetchPosts();
      handleClosePostModal();
    } catch (error) {
      console.error('Ошибка при добавлении поста:', error);
    }
  };

  const updatePost = async () => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/posts/${currentPost!.id}/`,
        currentPost
      );
      setPosts(
        posts.map((post) =>
          post.id === response.data.id ? response.data : post
        )
      );
      handleClosePostModal();
    } catch (error) {
      console.error('Ошибка при обновлении поста:', error);
    }
  };

  const onChangeTitle = (title: string) => {
    setCurrentPost((prevState) => (prevState ? { ...prevState, title } : null));
  };

  const onChangeAuthor = (author: string) => {
    setCurrentPost((prevState) =>
      prevState ? { ...prevState, author } : null
    );
  };

  const onChangeBody = (text: string) => {
    setCurrentPost((prevState) => (prevState ? { ...prevState, text } : null));
  };

  const loadNextPage = () => {
    if (nextPage) {
      fetchPosts('', nextPage);
    }
  };

  const loadPreviousPage = () => {
    if (previousPage) {
      fetchPosts('', previousPage);
    }
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Список постов</h1>
      <div className="input-group mb-3">
        <span className="input-group-text">
          <IoSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Поиск по заголовкам или по авторам..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button
          className="btn btn-outline-danger"
          type="button"
          onClick={() => setSearchQuery('')}
          title="Сбросить"
        >
          <IoClose />
        </button>
      </div>
      <Button variant="primary" onClick={() => handleShowPostModal()}>
        Добавить пост
      </Button>
      <div className="mt-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onEdit={() => handleShowPostModal(post)}
            onDelete={onDelete}
          />
        ))}
      </div>
      <div className="d-flex justify-content-between mt-4">
        <Button
          variant="secondary"
          onClick={loadPreviousPage}
          disabled={!previousPage}
          className="d-flex align-items-center"
        >
          <IoArrowBack className="me-2" />
          Предыдущая
        </Button>
        <Button
          variant="secondary"
          onClick={loadNextPage}
          disabled={!nextPage}
          className="d-flex align-items-center"
        >
          <IoArrowForward className="me-2" />
          Следующая
        </Button>
      </div>
      <PostModalBase
        show={showPostModal}
        onHide={handleClosePostModal}
        title={currentPost?.title ?? ''}
        author={currentPost?.author ?? ''}
        text={currentPost?.text ?? ''}
        onChangeTitle={onChangeTitle}
        onChangeAuthor={onChangeAuthor}
        onChangeBody={onChangeBody}
        onSubmit={currentPost && currentPost.id ? updatePost : addPost}
        modalTitle={
          currentPost && currentPost.id ? 'Редактировать пост' : 'Добавить пост'
        }
      />
    </div>
  );
};
