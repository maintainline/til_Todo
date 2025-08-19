import { useState } from 'react';
import { TodoType } from '../../types/todoType';

type TodoWriteProps = {
  hanedleTodoAdd: (newTodo: TodoType) => void;
};
function TodoWrite({ hanedleTodoAdd }: TodoWriteProps) {
  const [title, setTitle] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleSave = () => {
    if (title.trim()) {
      const newTodo = {
        id: Date.now().toString(),
        title: title,
        completed: false,
      };
      hanedleTodoAdd(newTodo);
      setTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSave}>등록</button>
    </div>
  );
}

export default TodoWrite;
