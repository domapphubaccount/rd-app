import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { Rd2Response } from "./types";

export default function useGetReports() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");

  const { isLoading, data, error } = useQuery({
    queryKey: ["rd2-reports", page, start_date, end_date],
    queryFn: (): Promise<Rd2Response> =>
      getRequest<Rd2Response>("/sp/reports/RD2", {
        params: {
          page,
          start_date,
          end_date,
        },
      }),
  });

  return { isLoading, data, error };
}
