import { create } from "zustand";

interface ConfirmModalOptions {
  description: string;
  title: string;
  btnText: string;
  type: "warn" | "danger";
}

interface ConfirmModalState extends ConfirmModalOptions {
  show: boolean;
  open: (options: ConfirmModalOptions) => void;
  close: () => void;
}

export const useConfirmModalStore = create<ConfirmModalState>((set) => ({
  description: "",
  title: "",
  btnText: "",
  type: "danger",
  show: false,
  open: (options) => set({ show: true, ...options }),
  close: () =>
    set({
      show: false,
      description: "",
      title: "",
      btnText: "",
      type: "danger",
    }),
}));
