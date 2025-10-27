import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axiosApi";
import { useSearchParams } from "react-router";
import type { Message, MessagesResponse } from "./types";

export default function useGetMessage( source: "log" | "queue",type: Message["type"]) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const start_date = searchParams.get("start_date");
  const end_date = searchParams.get("end_date");

  const endpoint = source === "log" ? "/messages-log" : "/messages-queue";

  const { isLoading, data, error } = useQuery({
    queryKey: ["Messages",type, page, start_date, end_date,endpoint],
    queryFn: (): Promise<MessagesResponse > =>
      getRequest<MessagesResponse >(`${endpoint}?type=${type}`, {
        params: {
          page,
          start_date,
          end_date,
        },
      }),
  });

  return { isLoading, data, error };
}
