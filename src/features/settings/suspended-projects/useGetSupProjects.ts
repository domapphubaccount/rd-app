import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { SuspendProjectsResponse } from "./types";

export default function useGetSupProjects() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { isLoading, data, error } = useQuery({
    queryKey: ["taxes", page],
    enabled: false,
    queryFn: (): Promise<SuspendProjectsResponse> =>
      getRequest<SuspendProjectsResponse>("/taxes", {
        params: {
          page,
        },
      }),
  });

  return { isLoading, data, error };
}
