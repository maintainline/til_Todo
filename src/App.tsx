import { useEffect, useState } from 'react';
import { Container, Popup, TodoSubContent, TodoTitle, TodoWarp } from './App.styled';
import TodoList from './components/todos/TodoList';
import TodoWrite from './components/todos/TodoWrite';
import { TodoType } from './types/todoType';

// 더미
const initialTodo: TodoType[] = [
  // { id: '1', title: '할일 1', completed: false },
  // { id: '2', title: '할일 2', completed: true },
  // { id: '3', title: '할일 3', completed: false },
  // { id: '4', title: '할일 4', completed: true },
  // { id: '5', title: '할일 5', completed: false },
];

function App() {
  // 할일 목록 상태관리
  const [todos, setTodos] = useState<TodoType[]>([]);
  // 편집중인 id 를 관리함
  const [editId, setEditId] = useState<string | null>(null);

  // 첫화면 (팝업) 만들기!
  const [popup, setPopup] = useState(true);

  const hanedleTodoAdd = (newTodo: TodoType) => {
    const arr = [newTodo, ...todos];
    setTodos(arr);
    setEditId(null);
  };

  const handleTodoEdit = (id: string, title: string) => {
    const arr = todos.map(item => (item.id === id ? { ...item, title: title } : item));
    setTodos(arr);
  };

  const handleTodoDelete = (id: string) => {
    const arr = todos.filter(item => item.id !== id);
    setTodos(arr);
  };

  const handleTodoToggle = (id: string) => {
    const arr = todos.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    );
    setTodos(arr);
  };

  useEffect(() => {
    setTodos(initialTodo);
  }, []);

  if (popup) {
    return <Popup onAnimationEnd={() => setPopup(false)}>My Todo_List📄</Popup>;
  }

  return (
    <Container>
      <TodoWarp>
        <TodoTitle>My Todo_List</TodoTitle>
        <TodoSubContent>
          <TodoWrite hanedleTodoAdd={hanedleTodoAdd} />
          <TodoList
            todos={todos}
            editId={editId}
            setEditId={setEditId}
            handleTodoEdit={handleTodoEdit}
            handleTodoDelete={handleTodoDelete}
            handleTodoToggle={handleTodoToggle}
          />
        </TodoSubContent>
      </TodoWarp>
    </Container>
  );
}

export default App;
