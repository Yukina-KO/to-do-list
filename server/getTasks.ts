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
  fetchTasks: (id: number) => Promise<void>;
}

export const taskStore = create<TaskState>((set) => ({
  tasks: [],
  isLoading: false,
  error: null,
  fetchTasks: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`https://my-json-server.typicode.com/Yukina-KO/to-do-list/tasks?user_id=${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      set({ tasks: data, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
}));
