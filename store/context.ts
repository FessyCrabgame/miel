import { create } from "zustand";

interface user {
  data: { username: string; password: string };
  setUser: (data: { username: string; password: string }) => void;
}

export const useCategoryStore = create<user>()((set) => ({
  data: {
    username: "",
    password: "",
  },
  setUser: (data: { username: string; password: string }) => set({ data }),
}));
