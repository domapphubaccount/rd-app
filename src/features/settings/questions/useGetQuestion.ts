import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import type { QuestionsResponse } from "./types";
import { useParams } from "react-router";

export default function useGetQuestion() {
  const params = useParams();
  const id = params.id;

  const { data, isLoading, error } = useQuery({
    queryKey: ["questions", id],
    queryFn: () => getRequest<QuestionsResponse>(`questions/all/${id}`),
  });
  return { data, isLoading, error };
}
