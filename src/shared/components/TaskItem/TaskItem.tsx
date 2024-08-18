import styles from "./TaskItem.module.scss";

interface TaskItemProperties {
  children: React.ReactNode;
  completed: boolean;
  count: number;
}

export const TaskItem: React.FC<TaskItemProperties> = ({ children, completed, count }) => {
  return (
    <button disabled={completed} className={styles.wrapper}>
      {count}. {children}
    </button>
  );
};

export default TaskItem;
