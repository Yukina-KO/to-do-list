"use client";
import { useEffect } from "react";
import { User, useUsersStore } from "../../../../server/getUsers";

export const UsersPage: React.FC = () => {
  const { users, isLoading, error, fetchUsers } = useUsersStore();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {users?.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email} - {user.phone}
        </li>
      ))}
    </div>
  );
};

export default UsersPage;
