import { getRequest } from "@/lib/axiosApi";
import { useQuery } from "@tanstack/react-query";

interface Ticket {
  id: string;
  name: string;
}

interface TicketsResponse {
  data: Ticket[];
}

export default function useGetTicketUsers() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["all-Tickets"],

    queryFn: (): Promise<TicketsResponse> =>
      getRequest<TicketsResponse>("specialists/all", {
        params: {},
      }),
  });

  return { isLoading, data, isError };
}
