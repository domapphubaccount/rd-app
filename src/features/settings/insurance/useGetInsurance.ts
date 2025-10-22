import { useQuery } from "@tanstack/react-query";
import type { InsurancesResponse } from "./types";
import { getRequest } from "@/lib/axiosApi";

export default function useGetInsurance() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["insurance"],
    queryFn: (): Promise<InsurancesResponse> =>
      getRequest<InsurancesResponse>("/insurance-companies", {
        params: {},
      }),
  });
  return { isLoading, data, error };
}
