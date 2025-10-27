import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import type { TokenSetting, TokensResponse } from "./types";

export default function useGetToken(key: TokenSetting["key"]) {
  const { isLoading, data, error } = useQuery({
    queryKey: ["token", key],
    queryFn: async (): Promise<TokensResponse> =>
      getRequest<TokensResponse>(`/settings/show?type=token`),
  });

  const token = key
    ? data?.data.find((item) => item.key === key)
    : undefined;

  return {
    isLoading,
    error,
    token,
  };
}
