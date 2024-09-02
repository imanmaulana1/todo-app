import { useState } from 'react';
import Header from './components/Header';
import AddToDo from './components/AddTodo';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTask) {
    setTodos((prevTodos) => [...prevTodos, newTask]);
  }

  console.log(todos);
  return (
    <div className='container'>
      <Header />
      <AddToDo addTodo={addTodo} />
    </div>
  );
}

export default App;
