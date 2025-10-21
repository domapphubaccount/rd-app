import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { StagesResponse } from "./types";

export default function useGetStages() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { isLoading, data, error } = useQuery({
    queryKey: ["stages", page],
    queryFn: (): Promise<StagesResponse> =>
      getRequest<StagesResponse>("/stages", {
        params: {
          page,
        },
      }),
  });

  return { isLoading, data, error };
}
