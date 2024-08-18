"use client";
import { taskStore } from "@/services/taskService";
import { usersStore } from "@/services/userService";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const CreateUser = () => {
  const [idTask, setIdTask] = useState(0);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    setIdTask(Number(params?.id));
    console.log(Number(params?.id) - 1);
  }, [params]);

  const { tasks } = taskStore();
  const { users } = usersStore();
  console.log(tasks);
  console.log(users);

  return <div>{tasks && tasks.map((task) => <div key={task.id}>{task.id === idTask && <h1>{task.title}</h1>}</div>)}</div>;
};

export default CreateUser;
