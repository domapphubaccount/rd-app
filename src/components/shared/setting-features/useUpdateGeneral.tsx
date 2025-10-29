import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFormDataRequest } from "@/lib/axiosApi";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import type { UpdateSettingPayload } from "./types";

interface UpdateGeneralResponse {
  message: string;
  data?: unknown;
}

export default function useUpdateGeneral(queryKey?: string) {
  const queryClient = useQueryClient();

  const { mutate: updateGeneralAction, isPending } = useMutation<
    UpdateGeneralResponse,
    AxiosError<{ message?: string }>,
    UpdateSettingPayload
  >({
    mutationFn: (payload) =>
      postFormDataRequest<UpdateGeneralResponse>("/settings/update", payload),

    onSuccess: (res) => {
      toast.success(res.message || "Settings updated successfully");
      if (queryKey)
        queryClient.invalidateQueries({ queryKey: ["settings", queryKey] });
      else queryClient.invalidateQueries();
    },

    onError: (err) => {
      toast.error(err.response?.data?.message || "Failed to update settings");
    },
  });

  return { updateGeneralAction, isPending };
}
