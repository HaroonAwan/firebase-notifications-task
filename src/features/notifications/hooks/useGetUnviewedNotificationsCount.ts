import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { getUnviewedNotificationCount } from "../api/getUnviewedNotificationsCount.ts";

export default function useGetUnviewedNotificationsCount() {
  // Fetches unviewed notifications count
  const { data, isLoading, refetch } = useQuery({
    queryKey: "get-all-unviewed-notifications",
    queryFn: () => getUnviewedNotificationCount(),
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  return { data, loading: isLoading, refetch };
}
