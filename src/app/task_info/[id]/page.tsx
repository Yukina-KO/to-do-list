"use client";
import { TaskPage } from "@/pages/taskPage/TaskPage";
import { taskStore } from "@/services/taskService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const Task = () => {
  const [idTask, setIdTask] = useState(0);
  const params = useParams();

  useEffect(() => {
    setIdTask(Number(params?.id));
  }, [params]);

  const { tasks } = taskStore();

  return <TaskPage data={tasks} currentTaskID={idTask} />;
};

export default Task;
