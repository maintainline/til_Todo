import { useState } from 'react';
import { TodoType } from '../../types/todoType';

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
    <li>
      {isEdit ? (
        <>
          <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
          <button onClick={handleEditSave}>저장</button>
          <button onClick={handleCancel}>취소</button>
        </>
      ) : (
        <>
          <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
          <span>{todo.title}</span>
          <button onClick={handleEdit}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
    </li>
  );
}

export default TodoDetail;
