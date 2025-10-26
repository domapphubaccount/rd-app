import { useParams, useSearchParams } from "react-router";
import type { FaqQuestionResponse } from "./types";
import { getRequest } from "@/lib/axiosApi";
import { useQuery } from "@tanstack/react-query";

export const useGetFaqQuestions = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const page = searchParams.get("page") || "1";
  const id = params.id;

  const { isLoading, data, error } = useQuery({
    queryKey: ["FaqQuestions", page, id],
    queryFn: (): Promise<FaqQuestionResponse> =>
      getRequest<FaqQuestionResponse>(`faq-support-questions/${id}`, {
        params: {
          page,
          id,
        },
      }),
  });
  return { isLoading, data, error };
};
