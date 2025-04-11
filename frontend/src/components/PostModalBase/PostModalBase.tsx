import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import { PostModalBaseProps } from '../../types/types';

/**
 * Компонента модального окна для создания или редактирования поста.
 * Этот компонент отображает форму, в которой пользователь может ввести заголовок,
 * автора и тело поста. Модальное окно можно открывать и закрывать с помощью
 * соответствующих свойств.
 *
 * @component
 * @param {Object} props - Свойства компоненты.
 * @param {boolean} props.show - Указывает, должно ли модальное окно отображаться.
 * @param {function} props.onHide - Функция обратного вызова для закрытия модального окна.
 * @param {string} props.title - Текущий заголовок поста.
 * @param {string} props.author - Текущий автор поста.
 * @param {string} props.text - Текущее тело поста.
 * @param {function} props.onChangeTitle - Функция для изменения заголовка поста.
 * @param {function} props.onChangeAuthor - Функция для изменения имени автора поста.
 * @param {function} props.onChangeBody - Функция для изменения тела поста.
 * @param {function} props.onSubmit - Функция, вызываемая при отправке формы.
 * @param {string} props.modalTitle - Заголовок модального окна.
 * @returns {JSX.Element} Возвращает отрисованное модальное окно с формой для поста.
 *
 * @example
 * // Использование компоненты PostModalBase
 * import { PostModalBase } from './PostModalBase';
 * function App() {
 *   const [showModal, setShowModal] = useState(false);
 *   const [title, setTitle] = useState('');
 *   const [author, setAuthor] = useState('');
 *   const [text, setText] = useState('');
 *   const handleSubmit = () => {
 *     // Логика сохранения поста
 *   };
 *   return (
 *     <>
 *       <Button onClick={() => setShowModal(true)}>Создать пост</Button>
 *       <PostModalBase
 *         show={showModal}
 *         onHide={() => setShowModal(false)}
 *         title={title}
 *         author={author}
 *         text={text}
 *         onChangeTitle={setTitle}
 *         onChangeAuthor={setAuthor}
 *         onChangeBody={setText}
 *         onSubmit={handleSubmit}
 *         modalTitle="Создать новый пост"
 *       />
 *     </>
 *   );
 * }
 */
export const PostModalBase: React.FC<PostModalBaseProps> = ({
  show,
  onHide,
  title,
  author,
  text,
  onChangeTitle,
  onChangeAuthor,
  onChangeBody,
  onSubmit,
  modalTitle,
}) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formPostTitle">
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите заголовок"
              value={title}
              onChange={(e) => onChangeTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPostAuthor">
            <Form.Label>Автор</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите имя автора"
              value={author}
              onChange={(e) => onChangeAuthor(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPostBody">
            <Form.Label>Тело поста</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              style={{ height: '200px' }}
              placeholder="Введите тело поста"
              value={text}
              onChange={(e) => onChangeBody(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
