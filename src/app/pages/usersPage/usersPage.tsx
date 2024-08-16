"use client";
import { User, usersStore } from "../../../../server/getUsers";
import styles from "./usersPage.module.scss";
import UserItem from "@/app/shared/components/UserItem/UserItem";
import { taskStore } from "../../../../server/getTasks";
import { useEffect } from "react";

interface UsersPageProperties {
  data: User[];
  isLoading: boolean;
  error: string | null;
}

export const UsersPage: React.FC<UsersPageProperties> = ({ data, isLoading, error }) => {
  const { tasks, fetchTasks } = taskStore();
  const getUserTasks = (id: number) => {
    fetchTasks(id);
    console.log(tasks);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
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
      <ol className={styles.userList}>
        {/* {isLoading && <div>Loading...</div>} */}
        {error && <div>Error: {error}</div>}
        {tasks?.map((task) => (
          <li key={task.id}>
            <UserItem>{task.title}</UserItem>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UsersPage;
