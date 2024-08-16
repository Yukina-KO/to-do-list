import { useEffect } from "react";
import { User, usersStore } from "../../../../server/getUsers";
import styles from "./usersPage.module.scss";
import UserItem from "@/app/shared/components/UserItem/UserItem";

interface UsersPageProperties {
  data: User[];
  isLoading: boolean;
  error: string | null;
}

export const UsersPage: React.FC<UsersPageProperties> = ({ data, isLoading, error }) => {
  return (
    <div className={styles.container}>
      <ol className={styles.userList}>
        {error && <div>Error: {error}</div>}
        {data?.map((user) => (
          <li key={user.id}>
            <UserItem onClick={() => console.log(user)}>{user.name}</UserItem>
          </li>
        ))}
      </ol>
      <ol className={styles.userList}>
        {/* {isLoading && <div>Loading...</div>} */}
        {error && <div>Error: {error}</div>}
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.phone}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UsersPage;
