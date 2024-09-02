import { useState } from 'react';
import Header from './components/Header';
import AddToDo from './components/AddTodo';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <AddToDo />
    </div>
  );
}

export default App;
