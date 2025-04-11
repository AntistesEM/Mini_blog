import React from 'react';

import { PostList } from '../components/PostList';

/**
 * Основная компонента приложения.
 * Этот компонент отвечает за отображение списка постов, который
 * загружается и отображается через компонент PostList.
 * Здесь может быть реализована дополнительная логика или
 * элементы интерфейса в будущем, если потребуется.
 *
 * @component
 * @returns {JSX.Element} Возвращает элемент PostList, который отображает все посты.
 *
 * @example
 * // Использование компоненты Home
 * import { Home } from './Home';
 *
 * function App() {
 *   return (
 *     <div>
 *       <Home />
 *     </div>
 *   );
 * }
 */
const Home: React.FC = () => {
  return <PostList />;
};

export default Home;
