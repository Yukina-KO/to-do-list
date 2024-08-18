import { create } from "zustand";

export type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  description: string;
};

export interface TaskState {
  tasks: Task[];
  isLoading: boolean;
  error: null | string;
  fetchTasks: (id: number) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
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
  deleteTask: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(`https://my-json-server.typicode.com/Yukina-KO/to-do-list/tasks/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete");
      }
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
}));
