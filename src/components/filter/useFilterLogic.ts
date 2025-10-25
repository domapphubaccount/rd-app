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
  default: boolean; // Changed from is_default to match API response
  order?: number;
};

type ApiResponse = {
  message: string;
  data: SavedFilterResponse[];
};

export const useGetSavedFilters = (category: string) => {
  return useQuery({
    queryKey: ["savedFilters", category],
    queryFn: async () => {
      const response = await getRequest<ApiResponse>(
        `/filters/list?category=${category}`
      );
      console.log("API response:", response); // Debug API response
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
