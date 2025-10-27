import type { ApiResponse, FilterDetail, FiltersState } from "./types";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useFilterStore } from "./store";
import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "@/lib/axiosApi";

export const useGetSavedFilters = (category: string) => {
  return useQuery({
    queryKey: ["savedFilters", category],
    queryFn: async () => {
      const response = await getRequest<ApiResponse>(
        `/filters/list?category=${category}`
      );

      return response.data.map((f) => ({
        ...f,
        filters: f.details
          ? f.details.reduce((acc: FiltersState, { key, value }) => {
              acc[key] = value;
              return acc;
            }, {})
          : {},
      }));
    },
    enabled: !!category,
  });
};

export const useAddSavedFilter = () => {
  return useMutation({
    mutationFn: (data: {
      name: string;
      category: string;
      details: FilterDetail[];
    }) =>
      postRequest("/filters", {
        ...data,
        default: false,
      }),
  });
};

export const useUpdateSavedFilter = () => {
  const { savedFilters } = useFilterStore();

  return useMutation({
    mutationFn: (data: {
      id: string;
      name: string;
      details: FilterDetail[];
    }) => {
      const currentFilter = savedFilters.find((f) => f.id === data.id);
      const defaultStatus = currentFilter ? currentFilter.default : false;

      return putRequest(`/filters/${data.id}`, {
        id: data.id,
        name: data.name,
        category: currentFilter?.category || "",
        details: data.details,
        default: defaultStatus,
      });
    },
  });
};

export const useDeleteSavedFilter = () => {
  return useMutation({
    mutationFn: (id: string) => deleteRequest(`/filters/${id}`),
  });
};

export const useSetDefaultFilter = () => {
  return useMutation({
    mutationFn: (data: { id: string; category: string }) =>
      putRequest(`/filters/${data.id}`, {
        category: data.category,
      }),
  });
};
