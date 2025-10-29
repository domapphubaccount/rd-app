import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { InspectionReportsResponse } from "./types";

export default function useGetReports() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");
  const PolicyNo = searchParams.get("PolicyNo");
  const ReferenceNo = searchParams.get("reference_number");
  const RequestNo = searchParams.get("RequestNo");
  const SurveyResolutionNo = searchParams.get("SurveyResolutionNo");
  const result = searchParams.get("result");
  const area = searchParams.get("area");
  const stage = searchParams.get("stage");
  const users = searchParams.get("users");
  const lat = searchParams.get("lat");
  const long = searchParams.get("long");
  const rad = searchParams.get("rad");
  const category = searchParams.get("category");
  const classification = searchParams.get("classification");

  const { isLoading, data, error } = useQuery({
    queryKey: [
      "inspection-reports",
      page,
      start_date,
      end_date,
      PolicyNo,
      ReferenceNo,
      RequestNo,
      SurveyResolutionNo,
      result,
      area,
      stage,
      users,
      lat,
      long,
      rad,
      category,
      classification,
    ],
    queryFn: (): Promise<InspectionReportsResponse> =>
      getRequest<InspectionReportsResponse>("/inspection-reports", {
        params: {
          page,
          start_date,
          end_date,
          PolicyNo,
          ReferenceNo,
          RequestNo,
          SurveyResolutionNo,
          result,
          area,
          stage,
          users,
          lat,
          long,
          rad,
          category,
          classification,
        },
      }),
  });

  return { isLoading, data, error };
}
