import { useEffect } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

// API Routes
import { updateAllNotificationsToViewed } from "../api/updateAllNotificationsToViewed";

// Components
import FullscreenLoader from "../../../components/Loaders/FullScreenLoader";
import { NotificationDetailItem } from "../components/NotificationDetailItem";
import useGetAllNotifications from "../hooks/useGetAllNotifications";

export const NotificationDetails = () => {
  const { data, loading } = useGetAllNotifications();
  const { mutateAsync: updateNotifications } = useMutation(
    updateAllNotificationsToViewed,
    {
      onError: () => {
        toast.error("Something went wrong");
      },
    }
  );

  // Update notifications isViewed whenever user visits this screen
  useEffect(() => {
    updateNotifications();
  }, []);

  if (loading) return <FullscreenLoader />;

  return (
    <div className="bg-green-200 h-screen flex justify-center items-center">
      <div className="w-1/2 bg-white p-5 rounded-xl space-y-2">
        {data?.map((notification) => (
          <NotificationDetailItem
            key={Math.random()}
            title={notification.title}
            message={notification.message}
            isViewed={notification.isViewed}
            timestamp={notification.timestamp}
          />
        ))}
      </div>
    </div>
  );
};
