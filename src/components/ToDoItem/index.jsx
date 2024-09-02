import React from 'react';
import PropTypes from 'prop-types';
import { MdDone, MdDelete } from 'react-icons/md';
import styles from './ToDoItem.module.css';

function ToDoItem({ todo, onToggleComplete, colorDot }) {
  return (
    <li>
      <div className={styles.taskItem}>
        <div className={styles.taskItemContent}>
          <div
            className={styles.dot}
            style={
              todo.isCompleted === false
                ? colorDot
                : { backgroundColor: '#cccccc' }
            }
          ></div>
          <p className={todo.isCompleted ? styles.taskComplete : ''}>
            {todo.task}
          </p>
        </div>
        <div className={styles.wrapperCta}>
          <div
            className={
              todo.isCompleted
                ? `${styles.doneCta} ${styles.complete}`
                : styles.doneCta
            }
          >
            <MdDone
              onClick={() => onToggleComplete(todo.id)}
              className={
                todo.isCompleted
                  ? `${styles.check} ${styles.complete}`
                  : styles.check
              }
            />
          </div>
          <MdDelete />
        </div>
      </div>
    </li>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    task: PropTypes.string,
    isCompleted: PropTypes.bool,
  }),
  onToggleComplete: PropTypes.func,
  colorDot: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
};

export default ToDoItem;
