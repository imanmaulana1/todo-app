import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
import ToDoItem from '../ToDoItem';

function TodoList({ todos, onToggleComplete, removeTodo }) {
  const colorDots = ['#fd99af', '#fac608', '#3fd4f4'];

  const getDynamicColorDots = (index) => {
    return { backgroundColor: colorDots[index % colorDots.length] };
  };

  return (
    <ul className={styles.wrapper}>
      {todos?.length > 0 &&
        todos.map((todo, index) => (
          <ToDoItem
            todo={todo}
            key={todo.id}
            onToggleComplete={onToggleComplete}
            colorDot={getDynamicColorDots(index)}
            removeTodo={removeTodo}
          />
        ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      task: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ),
  onToggleComplete: PropTypes.func,
  removeTodo: PropTypes.func,
};
export default TodoList;
