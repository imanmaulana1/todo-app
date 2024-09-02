import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.title}>Today's Tasks</h1>
      <p className={styles.subTitle}>
        Manage your tasks and boost your productivity.
      </p>
    </div>
  );
}
