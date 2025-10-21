import { useQuery } from "@tanstack/react-query";
import type { CompaniesResponse } from "./types";
import { getRequest } from "@/lib/axiosApi";

export default function useGetCompanies() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["companies"],
    queryFn: (): Promise<CompaniesResponse> =>
      getRequest<CompaniesResponse>("/companies", {
        params: {},
      }),
  });
  return { isLoading, data, error };
}
