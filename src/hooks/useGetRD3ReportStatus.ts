import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface Rd3ReportStatus {
  id: number;
  name: string;
}

interface Rd3ReportStatusResponse {
  data: Rd3ReportStatus[];
}

export default function useGetRD3ReportStatus() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Rd3ReportStatuss"],

    queryFn: (): Promise<Rd3ReportStatusResponse> =>
      getRequest<Rd3ReportStatusResponse>("/reports/stages-status/13", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
