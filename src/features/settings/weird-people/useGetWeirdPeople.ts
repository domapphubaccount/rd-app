import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { WeirdPeopleResponse } from "./types";

export default function useGetWeirdPeople() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const { isLoading, data, error } = useQuery({
    queryKey: ["weird-people", page],
    queryFn: (): Promise<WeirdPeopleResponse> =>
      getRequest<WeirdPeopleResponse>("/weird-people", {
        params: {
          page,
        },
      }),
  });

  return { isLoading, data, error };
}
