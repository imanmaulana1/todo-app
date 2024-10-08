import { useState } from 'react';
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import TodoList from './components/TodoList';
import Toast from './components/Toast';
import useLocalStorage from './hooks/useLocalStorage';

import './App.css';

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);
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

  function removeTodo(id) {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));

    setShowToast(true);

    setToastMessage('ToDo item removed successfully!');

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

  return (
    <div className='container'>
      <Toast
        showToast={showToast}
        toastMessage={toastMessage}
        closeToast={closeToast}
      />
      <Header />
      <AddToDo addTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
