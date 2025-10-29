import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { Rd5Response } from "./types";

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
  const id = searchParams.get("rd5_id");
  const type = searchParams.get("type");
  const status = searchParams.get("status");
  const ticketCode = searchParams.get("ticket_code");

  const { isLoading, data, error } = useQuery({
    queryKey: [
      "rd5-reports",
      page,
      start_date,
      end_date,
      PolicyNo,
      user,
      ReferenceNo,
      RequestNo,
      SurveyResolutionNo,
      type,
      status,
      id,
      ticketCode,
    ],
    queryFn: (): Promise<Rd5Response> =>
      getRequest<Rd5Response>("/rd5-reports", {
        params: {
          page,
          start_date,
          end_date,
          PolicyNo,
          user,
          ReferenceNo,
          RequestNo,
          SurveyResolutionNo,
          type,
          status,
          id,
          ticketCode,
        },
      }),
  });

  return { isLoading, data, error };
}
