import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { getAllNotifications } from "../api/getAllNotifications.ts";

export default function useGetAllNotifications() {
  const { data, isLoading } = useQuery({
    queryKey: "get-all-notifications",
    queryFn: () => getAllNotifications(),
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  return { data, loading: isLoading };
}
