// filters.ts
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
} from "@/lib/axiosApi";
import type { FiltersState } from "./types";

type FilterDetail = {
  key: string;
  value: string;
};

type SavedFilterResponse = {
  id: string;
  name: string;
  category: string;
  details?: FilterDetail[];
  filters?: FiltersState;
  is_default: boolean;
};

export const useGetSavedFilters = (category: string) => {
  return useQuery({
    queryKey: ["savedFilters", category],
    queryFn: async () => {
      const response = await getRequest<SavedFilterResponse[]>(
        `/filters/list?category=${category}`
      );
      console.log("API response:", response); // Debug API response
      return response.map((f) => ({
        ...f,
        filters: f.details
          ? f.details.reduce((acc: FiltersState, { key, value }) => {
              acc[key] = value;
              return acc;
            }, {})
          : f.filters || {},
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
    }) => postRequest("/filters", data),
  });
};

export const useUpdateSavedFilter = () => {
  return useMutation({
    mutationFn: (data: { id: string; name: string; details: FilterDetail[] }) =>
      putRequest(`/filters/${data.id}`, data),
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
      putRequest(`/filters/${data.id}/default`, {
        category: data.category,
      }),
  });
};
