import { useState } from 'react';
import Header from './components/Header';
import AddToDo from './components/AddTodo';
import TodoList from './components/TodoList';
import Toast from './components/Toast';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  function addTodo(newTask) {
    setTodos((prevTodos) => [...prevTodos, newTask]);

    setToastMessage('ToDo item added successfully!');

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  function handleToggleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  function closeToast() {
    setShowToast(false);
  }

  console.log(todos);
  return (
    <div className='container'>
      <Toast
        showToast={showToast}
        toastMessage={toastMessage}
        closeToast={closeToast}
      />
      <Header />
      <AddToDo addTodo={addTodo} />
      <TodoList todos={todos} onToggleComplete={handleToggleComplete} />
    </div>
  );
}

export default App;
