import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface Rd5ReportStatus {
  id: number;
  name: string;
}

interface Rd5ReportStatusResponse {
  data: Rd5ReportStatus[];
}

export default function useGetRD5ReportStatus() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Rd5ReportStatuss"],

    queryFn: (): Promise<Rd5ReportStatusResponse> =>
      getRequest<Rd5ReportStatusResponse>("/reports/stages-status/14", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
