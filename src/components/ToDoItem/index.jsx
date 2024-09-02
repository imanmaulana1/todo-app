import React from 'react';
import PropTypes from 'prop-types';
import { MdDone, MdDelete } from 'react-icons/md';
import styles from './ToDoItem.module.css';

function ToDoItem({
  todo: { id, task, isCompleted },
  onToggleComplete,
  colorDot,
  removeTodo,
}) {
  return (
    <li>
      <div className={styles.taskItem}>
        <div className={styles.taskItemContent}>
          <div
            className={styles.dot}
            style={
              isCompleted === false ? colorDot : { backgroundColor: '#cccccc' }
            }
          ></div>
          <p className={isCompleted ? styles.taskComplete : ''}>{task}</p>
        </div>
        <div className={styles.wrapperCta}>
          <div
            className={
              isCompleted
                ? `${styles.doneCta} ${styles.complete}`
                : styles.doneCta
            }
          >
            <MdDone
              onClick={() => onToggleComplete(id)}
              className={
                isCompleted
                  ? `${styles.check} ${styles.complete}`
                  : styles.check
              }
            />
          </div>
          <MdDelete className={styles.deleteIcon} onClick={() => removeTodo(id)} />
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
  colorDot: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
  onToggleComplete: PropTypes.func,
  removeTodo: PropTypes.func,
};

export default ToDoItem;
