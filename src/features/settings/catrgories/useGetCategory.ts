import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { CategoriesResponse } from "./types";

export default function useGetCategory() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { isLoading, data, error } = useQuery({
    queryKey: ["category", page],
    queryFn: (): Promise<CategoriesResponse> =>
      getRequest<CategoriesResponse>("/building-categories", {
        params: {
          page,
        },
      }),
  });

  return { isLoading, data, error };
}
