import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { ProjectQuotationsResponse } from "./types";

export default function useGetProjectQuotations() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");

  const { isLoading, data, error } = useQuery({
    queryKey: ["tis-quotations", page, start_date, end_date],
    queryFn: (): Promise<ProjectQuotationsResponse> =>
      getRequest<ProjectQuotationsResponse>("/tis-quotations", {
        params: {
          page,
          start_date,
          end_date,
        },
      }),
  });

  return { isLoading, data, error };
}
