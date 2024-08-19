import { Task } from "@/services/taskService";
import styles from "./TaskPage.module.scss";
import { useEffect, useState } from "react";

interface TaskPageProperties {
  data: Task[];
  currentTaskID: number;
}

export const TaskPage: React.FC<TaskPageProperties> = ({ data, currentTaskID }) => {
  const [currentTask, setCurrentTask] = useState<Task[]>([]);
  useEffect(() => {
    data.map((task) => {
      if (task.id === currentTaskID) {
        setCurrentTask([task]);
      }
    });
  }, [data, currentTaskID]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {currentTask.map((task) => (
          <div className={styles.task} key={task.id}>
            <div className={styles.title}>Задача: {task.title}</div>
            <div className={styles.description}>Описание: {task.description}</div>
            <div className={styles.description}>Статус: {task.completed ? "Выполнено" : "Не выполнено"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
