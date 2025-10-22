import { useConfirmModalStore } from "@/components/confirmation/store";
import { deleteRequest } from "@/lib/axiosApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteLog() {
  const queryClient = useQueryClient();
  const { close } = useConfirmModalStore();

  const { mutate: deleteLog, isPending } = useMutation({
    mutationFn: (selectedIds: number[]): Promise<{ message: string }> =>
      deleteRequest("", {
        data: {
          uuids: selectedIds,
        },
      }),

    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: [""] });
      toast.success(res.message);
      close();
    },

    onError: (err) => {
      close();
      console.log(err);
      toast.error("Something went wrong, try again.");
    },
  });

  return { deleteLog, isPending };
}
