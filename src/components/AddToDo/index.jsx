import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './AddToDo.module.css';

function AddToDo({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    isCompleted: false,
  });

  const [isFocus, setIsFocus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!todo.task.trim()) return;

    addTodo({ ...todo, id: uuidv4() });

    setTodo({ id: '', task: '', isCompleted: false });
  }

  function handleChange(e) {
    setTodo((prevTodo) => ({ ...prevTodo, task: e.target.value }));
  }

  function handleFocus() {
    setIsFocus(true);
  }

  function handleBlur() {
    setIsFocus(false);
  }

  return (
    <section className={styles.addTodoSection}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formWrapper}>
          <div className={styles.dots}>
            {[...Array(3)].map((_, index) => (
              <div
                className={
                  isFocus ? `${styles.dot} ${styles.animation}` : styles.dot
                }
                key={index}
              ></div>
            ))}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='todoInput' className={styles.srOnly}>
              Task Input
            </label>
            <input
              type='text'
              name='todo'
              id='todoInput'
              value={todo.task}
              placeholder={
                isFocus ? 'Please enter...' : 'What is your next task?'
              }
              className={styles.inputTodo}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete='off'
              required
            />
          </div>
        </div>
      </form>
    </section>
  );
}

AddToDo.propTypes = {
  addTodo: PropTypes.func,
};

export default AddToDo;
