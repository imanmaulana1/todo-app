import React from 'react';
import PropTypes from 'prop-types';
import { MdClose, MdCheckCircle } from 'react-icons/md';
import styles from './Toast.module.css';

function Toast({ showToast, toastMessage, closeToast }) {
  return (
    <div
      className={
        showToast
          ? `${styles.toastWrapper} ${styles.show}`
          : styles.toastWrapper
      }
    >
      <MdCheckCircle className={styles.success} />
      <div className={styles.toastContent}>
        <h3 className={styles.toastTitle}>Success</h3>
        <p className={styles.toastMsg}>{toastMessage}</p>
      </div>
      <div className={styles.close}>
        <MdClose onClick={closeToast} />
      </div>
    </div>
  );
}

Toast.propTypes = {
  showToast: PropTypes.bool,
  toastMessage: PropTypes.string,
  closeToast: PropTypes.func,
};

export default Toast;
