import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface Rd7ReportStatus {
  id: number;
  name: string;
}

interface Rd7ReportStatusResponse {
  data: Rd7ReportStatus[];
}

export default function useGetRD7ReportStatus() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Rd7ReportStatuss"],

    queryFn: (): Promise<Rd7ReportStatusResponse> =>
      getRequest<Rd7ReportStatusResponse>("/reports/stages-status/9", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
