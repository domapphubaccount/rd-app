import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { Rd7QuotationsResponse } from "./types";

export default function useGetRD7Quotations() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");
  const date_from = searchParams.get("date_from");
  const date_to = searchParams.get("date_to");

  const { isLoading, data, error } = useQuery({
    queryKey: [
      "rd7-quotations",
      page,
      start_date,
      end_date,
      date_from,
      date_to,
    ],
    queryFn: (): Promise<Rd7QuotationsResponse> =>
      getRequest<Rd7QuotationsResponse>("/rd7-quotations", {
        params: {
          page,
          start_date,
          end_date,
          date_from,
          date_to,
        },
      }),
  });

  return { isLoading, data, error };
}
