import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface Rd3ReportStatus {
  id: number;
  name: string;
}

interface Rd3ReportStatusResponse {
  data: Rd3ReportStatus[];
}

export default function useGetResultFilters() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Result-Filters"],

    queryFn: (): Promise<Rd3ReportStatusResponse> =>
      getRequest<Rd3ReportStatusResponse>("/reports/r-result-filter", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
