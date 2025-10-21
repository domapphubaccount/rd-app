import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { EndUsersResponse } from "./types";

export default function useGetEnduser() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { isLoading, data, error } = useQuery({
    queryKey: ["enduser", page],
    queryFn: (): Promise<EndUsersResponse> =>
      getRequest<EndUsersResponse>("/clients", {
        params: {
          page,
        },
      }),
  });
  return { isLoading, data, error };
}
