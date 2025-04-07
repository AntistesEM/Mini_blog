import React from 'react';
import { PostModalBase } from '../PostModalBase';
import { PostModalBaseProps } from "../../types/types";

export const EditPostModal: React.FC<PostModalBaseProps> = (props) => {
  return (
    <PostModalBase
      {...props}
      modalTitle="Редактировать пост"
    />
  );
};
