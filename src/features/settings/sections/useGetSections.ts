import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { SectionResponse } from "./types";

export default function useGetSections() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { isLoading, data, error } = useQuery({
    queryKey: ["sections", page],
    queryFn: () =>
      getRequest<SectionResponse>(`/sections?page=${page}`, {
        params: {
          page,
        },
      }),
  });

  return { isLoading, data, error };
}
