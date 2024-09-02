import React, { useState } from 'react';
import styles from './AddToDo.module.css';

function AddToDo() {
  const [isFocus, setIsFocus] = useState(false);

  function handleFocus() {
    setIsFocus(true);
  }

  function handleBlur() {
    setIsFocus(false);
  }

  return (
    <section className={styles.addTodoSection}>
      <form>
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
          <label htmlFor='todoInput' className={styles.srOnly}>
            Task Input
          </label>
          <input
            type='text'
            name='todo'
            id='todoInput'
            placeholder={
              isFocus ? 'Please enter...' : 'What is your next task?'
            }
            className={styles.inputTodo}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </div>
      </form>
    </section>
  );
}

export default AddToDo;
