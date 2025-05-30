import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>My To-Do App</h1>
      <TodoInput />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;