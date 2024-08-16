"use client";
import Image from "next/image";
// import styles from "./page.module.scss";
import { User, useUsersStore } from "../../server/getUsers";
import { useEffect } from "react";
import MainPage from "./pages/mainPage/mainPage";

export const Home = () => {
  const { users, isLoading, error, fetchUsers } = useUsersStore();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <main>
      <MainPage data={users} />
    </main>
  );
};

export default Home;
