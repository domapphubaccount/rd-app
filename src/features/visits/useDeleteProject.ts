import { useConfirmModalStore } from "@/components/confirmation/store";
import { deleteRequest } from "@/lib/axiosApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteProject() {
  const queryClient = useQueryClient();
  const { close } = useConfirmModalStore();

  const { mutate: deleteProject, isPending } = useMutation({
    mutationFn: (selectedIds: string[]): Promise<{ message: string }> =>
      deleteRequest("/mass-delete-projects", {
        data: {
          uuids: selectedIds,
        },
      }),

    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success(res.message);
      close();
    },

    onError: (err) => {
      close();
      console.log(err);
      toast.error("Something went wrong, try again.");
    },
  });

  return { deleteProject, isPending };
}
