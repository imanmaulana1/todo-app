import { useState } from 'react';
import Header from './components/Header';
import AddToDo from './components/AddTodo';

import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTask) {
    setTodos((prevTodos) => [...prevTodos, newTask]);
  }

  function handleToggleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  console.log(todos);
  return (
    <div className='container'>
      <Header />
      <AddToDo addTodo={addTodo} />
      <TodoList todos={todos} onToggleComplete={handleToggleComplete} />
    </div>
  );
}

export default App;
