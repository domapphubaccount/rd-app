import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getRequest, postRequest } from "@/lib/axiosApi";
import type { TemplatesResponse } from "./types";
import { toast } from "sonner";

export default function useGetMissingData() {
  const queryClient = useQueryClient();

  const { isLoading, data, error } = useQuery({
    queryKey: ["Missing Data"],
    queryFn: (): Promise<TemplatesResponse> =>
      getRequest<TemplatesResponse>(`/missing-data-reports`),
  });

  const { mutate: saveMissingData, isPending: isSaving } = useMutation({
    mutationFn: (payload: {
      missing_data: { id?: number;  name_en: string; name_ar: string }[];
      can_add_more: boolean;
    }) =>
      postRequest(`/missing-data-reports/update`, {
        ...payload,
        _method: "PUT",
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Missing Data"] });
      toast.success("Data saved successfully ✅");
    },
    onError: (err: unknown) => {
      if (err && typeof err === "object" && "response" in err) {
        const axiosErr = err as { response?: { data?: { message?: string } } };
        toast.error(
          axiosErr.response?.data?.message || "Something went wrong ❌"
        );
      }
    },
  });

  return { isLoading, isSaving, data, error, saveMissingData };
}
