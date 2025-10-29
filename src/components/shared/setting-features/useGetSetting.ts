import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import type {
  Setting,
  SettingResponse,
} from "@/components/shared/setting-features/types";

export default function useGetSettings<T extends string>(
  type: T,
  key?: Setting["key"]
) {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["settings", type],
    queryFn: async (): Promise<SettingResponse> =>
      getRequest<SettingResponse>(`/settings/show?type=${type}`),
  });

  const token = key ? data?.data.find((item) => item.key === key) : undefined;

  return {
    isLoading,
    error,
    data,
    token,
    refetch,
  };
}
