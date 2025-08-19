import { Dispatch, SetStateAction, useState } from 'react';
import TodoDetail from './TodoDetail';
import { TodoType } from '../../types/todoType';

type TodoListProps = {
  todos: TodoType[];
  editId: string | null;
  setEditId: Dispatch<SetStateAction<string | null>>;
  handleTodoEdit: (id: string, title: string) => void;
  handleTodoDelete: (id: string) => void;
  handleTodoToggle: (id: string) => void;
};

function TodoList({
  todos,
  editId,
  setEditId,
  handleTodoEdit,
  handleTodoDelete,
  handleTodoToggle,
}: TodoListProps) {
  // const [editId, setEditId] = useState<string>('');
  const onEdit = (id: string) => {
    setEditId(id);
  };
  const onToggle = (id: string) => {
    handleTodoToggle(id);
    if (editId === id) {
      setEditId(null);
    }
    console.log('토글임다');
  };
  const onDelete = (id: string) => {
    handleTodoDelete(id);
    if (editId === id) {
      setEditId(null);
    }
    console.log('삭제임다');
  };
  const onCancel = () => {
    setEditId(null);
    console.log('취소임다');
  };
  const onSaveEdit = (id: string, newTitle: string) => {
    handleTodoEdit(id, newTitle);
    setEditId(null);
    console.log('수정임다');
  };
  return (
    <div>
      <h2>할일 목록</h2>
      {todos.length === 0 ? (
        <p>목록이 없습니다.</p>
      ) : (
        <ul>
          {todos.map(item => (
            <TodoDetail
              key={item.id}
              todo={item}
              isEdit={item.id === editId}
              onEdit={onEdit}
              onSaveEdit={onSaveEdit}
              onCancel={onCancel}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
