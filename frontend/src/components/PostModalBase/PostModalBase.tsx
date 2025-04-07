import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { PostModalBaseProps } from "../../types/types";

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
            <Form.Control type="text" placeholder="Введите заголовок" value={title} onChange={(e) => onChangeTitle(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPostAuthor">
            <Form.Label>Автор</Form.Label>
            <Form.Control type="text" placeholder="Введите имя автора" value={author} onChange={(e) => onChangeAuthor(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPostBody">
            <Form.Label>Тело поста</Form.Label>
            <Form.Control as="textarea" rows={5} style={{ height: '200px' }} placeholder="Введите тело поста" value={text} onChange={(e) => onChangeBody(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
        <Button variant="primary" onClick={onSubmit}>Сохранить</Button>
      </Modal.Footer>
    </Modal>
  );
};
