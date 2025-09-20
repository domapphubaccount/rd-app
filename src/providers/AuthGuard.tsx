import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "@/lib/useAuth";

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const navigate = useNavigate();
  const { isAuthed } = useAuth();

  useEffect(() => {
    if (!isAuthed) {
      navigate("/login", { replace: true });
    }
  }, [isAuthed, navigate]);

  if (!isAuthed) {
    return null;
  }

  return <>{children}</>;
}
