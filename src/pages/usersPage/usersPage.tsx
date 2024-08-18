"use client";
import { taskStore } from "@/services/taskService";
import styles from "./usersPage.module.scss";
import UserItem from "@/shared/components/UserItem/UserItem";
import TaskItem from "@/shared/components/TaskItem/TaskItem";
import { User } from "@/services/userService";
import Link from "next/link";
import { useEffect, useState } from "react";

interface UsersPageProperties {
  data: User[];
  isLoading: boolean;
  error: string | null;
}

export const UsersPage: React.FC<UsersPageProperties> = ({ data, isLoading, error }) => {
  const { tasks, fetchTasks, deleteTask } = taskStore();
  const getUserTasks = (id: number) => {
    console.log(data);
    fetchTasks(id);
  };

  const deleteUserTask = (id: number) => {
    deleteTask(id);
  };
  return (
    <div className={styles.container}>
      <ol className={styles.userList}>
        {error && <div>Error: {error}</div>}
        {data?.map((user) => (
          <li onClick={() => getUserTasks(user.id)} key={user.id}>
            <UserItem>{user.name}</UserItem>
          </li>
        ))}
      </ol>
      {tasks[0] && (
        <ol className={styles.userList}>
          {error && <div>Error: {error}</div>}
          {tasks
            ?.sort((a, b) => {
              if (a.completed === b.completed) return 0;
              return a.completed ? 1 : -1;
            })
            .map((task, index) => (
              <div className={styles.task} key={task.id}>
                <Link href={`/task_info/${task.id}`}>
                  <li>
                    <TaskItem count={index + 1} completed={task.completed}>
                      {task.title}
                    </TaskItem>
                  </li>
                </Link>
                <button onClick={() => deleteUserTask(task.id)} className={styles.deleteButton} type="button">
                  X
                </button>
              </div>
            ))}
        </ol>
      )}
    </div>
  );
};

export default UsersPage;
