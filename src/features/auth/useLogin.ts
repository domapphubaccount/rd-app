import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useCookies } from "react-cookie";
import { postRequest } from "@/lib/axiosApi";
import { useAuthStore } from "./store";
import type { LoginData } from "./schema";
import type { LoginResponse } from "./types";

export default function useLogin() {
  const navigate = useNavigate();
  const { updateUser } = useAuthStore();
  const [, setCookie] = useCookies(["token"]);

  const { mutate: loginAction, isPending } = useMutation({
    mutationFn: (formData: LoginData): Promise<LoginResponse> =>
      postRequest<LoginResponse>("/login", formData),

    onSuccess: (res: LoginResponse) => {
      setCookie("token", res.token, {
        path: "/",
        secure: true,
        sameSite: "strict",
      });
      updateUser(res);
      navigate("/");
      toast.success("Logged in successfully");
    },

    onError: (err) => {
      console.error("Login error:", err);
      toast.error("Invalid credentials");
    },
  });

  return {
    loginAction,
    isPending,
  };
}
