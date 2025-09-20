import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { UsersResponse } from "./types";

export default function useGetUsers() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { isLoading, data, isError } = useQuery({
    queryKey: ["users", page],

    queryFn: (): Promise<UsersResponse> =>
      getRequest<UsersResponse>("/users", {
        params: {
          page,
        },
      }),
  });

  return { isLoading, data, isError };
}
