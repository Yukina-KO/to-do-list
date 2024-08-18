"use client";
import { useEffect } from "react";
import { usersStore } from "../../services/userService";
import UsersPage from "@/pages/usersPage/usersPage";

export const Users: React.FC = () => {
  const { users, isLoading, error, fetchUsers } = usersStore();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <UsersPage data={users} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Users;
