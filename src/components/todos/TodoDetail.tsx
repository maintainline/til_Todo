import { useState } from 'react';
import { TodoType } from '../../types/todoType';
import {
  DetailbackColor,
  DetailButtonWrap,
  DetailCancelButton,
  DetailCheckInput,
  DetailDeletelButton,
  DetailEditButtonWrap,
  DetailEditInput,
  DetailEditSaveButton,
  DetailSaveButton,
  DetailSpan,
  DetailWrap,
} from './TodoDetail.styled';

type TodoDetailProps = {
  todo: TodoType;
  isEdit: boolean;
  onEdit: (id: string) => void;
  onSaveEdit: (id: string, newTitle: string) => void;
  onCancel: (id: string) => void;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

function TodoDetail({
  todo,
  isEdit,
  onSaveEdit,
  onEdit,
  onCancel,
  onDelete,
  onToggle,
}: TodoDetailProps) {
  const [editTitle, setEditTitle] = useState<string>(todo.title);
  // const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleToggle = () => {
    onToggle(todo.id);
    // console.log('토글!');
  };

  const handleEditSave = () => {
    // console.log('저장!');
    if (editTitle.trim()) {
      onSaveEdit(todo.id, editTitle);
    }
  };
  const handleCancel = () => {
    // console.log('취소');
    setEditTitle(todo.title);
    onCancel(todo.id);
  };
  const handleEdit = () => {
    console.log('수정');
    onEdit(todo.id);
  };
  const handleDelete = () => {
    console.log('삭제');
    onDelete(todo.id);
  };

  return (
    <DetailWrap>
      {isEdit ? (
        <>
          <DetailEditInput
            rows={2}
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
          />
          <DetailEditButtonWrap>
            <DetailEditSaveButton onClick={handleEditSave}>저장</DetailEditSaveButton>
            <DetailCancelButton onClick={handleCancel}>취소</DetailCancelButton>
          </DetailEditButtonWrap>
        </>
      ) : (
        <>
          <DetailbackColor>
            <DetailCheckInput type="checkbox" checked={todo.completed} onChange={handleToggle} />
            <DetailSpan>{todo.title}</DetailSpan>
          </DetailbackColor>
          <DetailButtonWrap>
            <DetailSaveButton onClick={handleEdit}>수정</DetailSaveButton>
            <DetailDeletelButton onClick={handleDelete}>삭제</DetailDeletelButton>
          </DetailButtonWrap>
        </>
      )}
    </DetailWrap>
  );
}

export default TodoDetail;
