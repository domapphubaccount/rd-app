import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { Rd3Response } from "./types";

export default function useGetReports() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");
  const PolicyNo = searchParams.get("PolicyNo");
  const ReferenceNo = searchParams.get("reference_number");
  const RequestNo = searchParams.get("RequestNo");
  const SurveyResolutionNo = searchParams.get("SurveyResolutionNo");
  const user = searchParams.get("inspector");
  const id = searchParams.get("id");
  const deleted = searchParams.get("in_active");
  const status = searchParams.get("status");

  const { isLoading, data, error } = useQuery({
    queryKey: [
      "rd3-reports",
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
      id,
    ],
    queryFn: (): Promise<Rd3Response> =>
      getRequest<Rd3Response>("/rd3-reports", {
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
          id,
        },
      }),
  });

  return { isLoading, data, error };
}
