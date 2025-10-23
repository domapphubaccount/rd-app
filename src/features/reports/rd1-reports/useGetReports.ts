import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { Rd1Response } from "./types";

export default function useGetReports() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");
  const PolicyNo = searchParams.get("PolicyNo");

  const { isLoading, data, error } = useQuery({
    queryKey: ["rd1-reports", page, start_date, end_date, PolicyNo],
    queryFn: (): Promise<Rd1Response> =>
      getRequest<Rd1Response>("/sp/reports/RD1", {
        params: {
          page,
          start_date,
          end_date,
          PolicyNo,
        },
      }),
  });

  return { isLoading, data, error };
}
