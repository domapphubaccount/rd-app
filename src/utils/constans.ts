interface User {
  uuid: string;
  name: string;
}

interface UsersResponse {
  data: User[];
}

interface Category {
  id: number;
  name: string;
}
interface CategoriesResponse {
  data: Category[];
}

import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

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

export function useGetAllBuildingCategories() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["all-building-categories"],

    queryFn: (): Promise<CategoriesResponse> =>
      getRequest<CategoriesResponse>("/building-categories/all", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
