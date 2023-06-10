// userStore.js
import create from 'zustand';
import {User} from "@/interfaces/interfaces";

export const useUserStore = create((set) => ({
    user: null,
    setUser: (userData: User) => set({ user: userData }),
}));