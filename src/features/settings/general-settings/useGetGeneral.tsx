import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import type { GeneralResponse } from "./types";

export default function useGetGeneral() {

  const { isLoading, data, error } = useQuery({
    queryKey: ["general"],
    queryFn: (): Promise<GeneralResponse> =>
      getRequest<GeneralResponse>("/settings/show?type=general "),
  });

  return { isLoading, data, error };
}
