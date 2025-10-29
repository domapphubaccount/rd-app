import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface Rd6ReportStatus {
  id: number;
  name: string;
}

interface Rd6ReportStatusResponse {
  data: Rd6ReportStatus[];
}

export default function useGetRD6ReportStatus() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Rd6ReportStatuss"],

    queryFn: (): Promise<Rd6ReportStatusResponse> =>
      getRequest<Rd6ReportStatusResponse>("/reports/stages-status/8", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
