import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { LoginResponse } from "./types";

interface AuthState {
  user: LoginResponse | null;
  logout: () => void;
  updateUser: (user: LoginResponse) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      updateUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
