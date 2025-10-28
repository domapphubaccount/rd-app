import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface Rd0ReportStatus {
  id: number;
  name: string;
}

interface Rd0ReportStatusResponse {
  data: Rd0ReportStatus[];
}

export default function useGetRD0ReportStatus() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Rd0ReportStatuss"],

    queryFn: (): Promise<Rd0ReportStatusResponse> =>
      getRequest<Rd0ReportStatusResponse>("/reports/stages-status/7", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
