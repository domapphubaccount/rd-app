import { getRequest } from "@/lib/axiosApi";
import { useQuery } from "@tanstack/react-query";

interface Category {
  id: number;
  name: string;
}
interface CategoriesResponse {
  data: Category[];
}

export function useGetAllBuildingCategories() {
  return useQuery({
    queryKey: ["all-building-categories"],

    queryFn: (): Promise<CategoriesResponse> =>
      getRequest<CategoriesResponse>("/building-categories/all", {
        params: {},
      }),
  });
}
