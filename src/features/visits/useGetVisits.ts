import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { VisitRequestsResponse } from "./types";

export default function useGetVisits() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");

  const { isLoading, data, error } = useQuery({
    queryKey: ["visits", page, start_date, end_date],
    queryFn: (): Promise<VisitRequestsResponse> =>
      getRequest<VisitRequestsResponse>("/visit-requests", {
        params: {
          page,
          start_date,
          end_date,
        },
      }),
  });

  return { isLoading, data, error };
}
