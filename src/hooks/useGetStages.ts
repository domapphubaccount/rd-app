import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface stages {
  id: string;
  name: string;
}

interface stagesResponse {
  data: stages[];
}

export default function useGetAllstages() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["all-stages"],

    queryFn: (): Promise<stagesResponse> =>
      getRequest<stagesResponse>("/stages-list", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
