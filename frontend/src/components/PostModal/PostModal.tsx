import React from 'react';
import { PostModalBase } from '../PostModalBase';
import { PostModalBaseProps } from "../../types/types";

export const PostModal: React.FC<PostModalBaseProps> = (props) => {
  return (
    <PostModalBase
      {...props}
      modalTitle="Добавить пост"
    />
  );
};
