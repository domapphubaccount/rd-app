import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { Rd0Response } from "./types";

export default function useGetReports() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");
  const PolicyNo = searchParams.get("PolicyNo");
  const ReferenceNo = searchParams.get("reference_number");
  const RequestNo = searchParams.get("RequestNo");
  const SurveyResolutionNo = searchParams.get("SurveyResolutionNo");
  const user = searchParams.get("users");
  const deleted = searchParams.get("deleted");
  const status = searchParams.get("status");

  const { isLoading, data, error } = useQuery({
    queryKey: [
      "rd0-reports",
      page,
      start_date,
      end_date,
      PolicyNo,
      user,
      ReferenceNo,
      RequestNo,
      SurveyResolutionNo,
      deleted,
      status,
    ],
    queryFn: (): Promise<Rd0Response> =>
      getRequest<Rd0Response>("/rd0-reports", {
        params: {
          page,
          start_date,
          end_date,
          PolicyNo,
          user,
          ReferenceNo,
          RequestNo,
          SurveyResolutionNo,
          deleted,
          status,
        },
      }),
  });

  return { isLoading, data, error };
}
