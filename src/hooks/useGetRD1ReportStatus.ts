import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface Rd1ReportStatus {
  id: number;
  name: string;
}

interface Rd1ReportStatusResponse {
  data: Rd1ReportStatus[];
}

export default function useGetRD1ReportStatus() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Rd1ReportStatuss"],

    queryFn: (): Promise<Rd1ReportStatusResponse> =>
      getRequest<Rd1ReportStatusResponse>("/reports/stages-status/10", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
