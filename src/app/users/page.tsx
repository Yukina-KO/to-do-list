"use client";
import { Suspense, useEffect } from "react";
import { usersStore } from "../../../server/getUsers";
import UsersPage from "../pages/usersPage/usersPage";

export async function Users() {
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
}

export default Users;
