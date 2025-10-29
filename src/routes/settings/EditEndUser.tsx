import useGetSettings from "@/components/shared/setting-features/useGetSetting";
import useUpdateGeneral from "@/components/shared/setting-features/useUpdateGeneral";
import TableConfig from "@/features/settings/edit-end-user/tableConfig";
import { endUserSections } from "@/features/settings/edit-end-user/config";

export default function EditEndUser() {
  const queryKey = "end_user";
  const {  data } = useGetSettings(queryKey);
  const { updateGeneralAction, isPending } = useUpdateGeneral(queryKey);


  const allSettings = data?.data ?? [];

  return (
    <>
      <title>RD App | Edit End User</title>

      <TableConfig
        allSettings={allSettings}
        sections={endUserSections}
        onSubmit={updateGeneralAction}
        isPending={isPending}
      />
    </>
  );
}
