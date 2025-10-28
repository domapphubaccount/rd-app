import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface Degrees {
  id: string;
  name: string;
}

interface DegreesResponse {
  data: Degrees[];
}

export default function useGetAllDegrees() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["all-Degrees"],

    queryFn: (): Promise<DegreesResponse> =>
      getRequest<DegreesResponse>("/ticket_degrees/all", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
