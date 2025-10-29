import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { DrReportsResponse } from "./types";

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
  const region = searchParams.get("region");
  const cases = searchParams.get("cases");
  const degree = searchParams.get("degree");
  const areaFrom = searchParams.get("area_from");
  const areaTo = searchParams.get("area_to");
  const projectCostFrom = searchParams.get("project_cost_from");
  const projectCostTo = searchParams.get("project_cost_to");
  const report_type = searchParams.get("report_type");
  const lat = searchParams.get("lat");
  const long = searchParams.get("long");
  const rad = searchParams.get("rad");

  const { isLoading, data, error } = useQuery({
    queryKey: [
      "dr-reports",
      page,
      start_date,
      end_date,
      PolicyNo,
      user,
      ReferenceNo,
      RequestNo,
      SurveyResolutionNo,
      region,
      cases,
      degree,
      areaFrom,
      areaTo,
      projectCostFrom,
      projectCostTo,
      report_type,
      lat,
      long,
      rad,
    ],
    queryFn: (): Promise<DrReportsResponse> =>
      getRequest<DrReportsResponse>("/sp/reports/DR", {
        params: {
          page,
          start_date,
          end_date,
          PolicyNo,
          user,
          ReferenceNo,
          RequestNo,
          SurveyResolutionNo,
          region,
          cases,
          degree,
          areaFrom,
          areaTo,
          projectCostFrom,
          projectCostTo,
          report_type,
          lat,
          long,
          rad,
        },
      }),
  });

  return { isLoading, data, error };
}
