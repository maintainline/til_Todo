import { useState } from 'react';
import { TodoType } from '../../types/todoType';
import { WriteBox, WriteButton, WriteWrap } from './TodoWrite.styled';

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
    <WriteWrap>
      <WriteBox
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <WriteButton onClick={handleSave}>등록</WriteButton>
    </WriteWrap>
  );
}

export default TodoWrite;
