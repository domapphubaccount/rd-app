import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";

interface Categorie {
  id: string;
  name: string;
}

interface CategoriesResponse {
  data: Categorie[];
}

export default function useGetAllCategories() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["all-Categories"],

    queryFn: (): Promise<CategoriesResponse> =>
      getRequest<CategoriesResponse>("/building-categories/all", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
