import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface User {
  uuid: string;
  name: string;
}

interface UsersResponse {
  data: User[];
}

export default function useGetAllUsers() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["all-users"],

    queryFn: (): Promise<UsersResponse> =>
      getRequest<UsersResponse>("/list/users", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
