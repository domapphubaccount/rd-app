import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface region {
  id: string;
  region: string;
}

interface regionsResponse {
  data: region[];
}

export default function useGetAllregion() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["all-region"],

    queryFn: (): Promise<regionsResponse> =>
      getRequest<regionsResponse>("/region_costs", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
