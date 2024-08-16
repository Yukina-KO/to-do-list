import { create } from "zustand";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

interface UserState {
  users: User[];
  isLoading: boolean;
  error: null | string;
  fetchUsers: () => Promise<void>;
}

export const useUsersStore = create<UserState>((set) => ({
  users: [],
  isLoading: false,
  error: null,
  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch("https://my-json-server.typicode.com/Yukina-KO/to-do-list/users");
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      set({ users: data[0], isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },
}));
