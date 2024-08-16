import { create } from "zustand";

export type Task = {
  userId: number;
  id: number;
  title: string;
  completed: string;
};

export interface TaskState {
  tasks: Task[];
  isLoading: boolean;
  error: null | string;
  fetchUsers: () => Promise<void>;
}

export const usersStore = create<TaskState>((get, id) => ({
  tasks: [],
  isLoading: false,
  error: null,
  fetchUsers: async () => {
    get({ isLoading: true, error: null });
    try {
      const response = await fetch(`https://my-json-server.typicode.com/Yukina-KO/to-do-list/tasks`);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      get({ tasks: data[0], isLoading: false });
    } catch (error) {
      get({ error: (error as Error).message, isLoading: false });
    }
  },
}));
