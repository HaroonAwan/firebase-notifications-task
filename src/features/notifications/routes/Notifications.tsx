import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

// Icons Import
import BellIcon from "../../../assets/icons/bell.svg";

// API Routes
import { create } from "../api/create";

// Components Imports
import { NotificationCard } from "../components/NotificationCard";
import useGetUnviewedNotificationsCount from "../hooks/useGetUnviewedNotificationsCount";
import FullscreenLoader from "../../../components/Loaders/FullScreenLoader";

// Dummy Notifications
const data = [
  {
    id: 1,
    title: "Simple Notification",
    message: "Just for testing purpose",
    type: "SIMPLE",
  },
  {
    id: 2,
    title: "Comunity Notification",
    message: "Just for testing purpose",
    type: "COMMUNITY",
  },
  {
    id: 3,
    title: "Specific Notification",
    message: "Just for testing purpose",
    type: "SPECIFIC",
  },
];

export const Notifications = () => {
  // Returns Unviewed Notifications Count
  const {
    data: notificationCount,
    loading,
    refetch,
  } = useGetUnviewedNotificationsCount();

  // Mutation for creating new Notification
  const { mutateAsync: createNotification } = useMutation(create, {
    onError: (e: Error) => {
      alert(e.message);
    },
  });

  // Create new notification and refetch unviewed notification counts
  const sendNotification = async (id: number) => {
    const notification = data.find((item) => item.id === id);
    if (!notification) return toast.error("No notification found");

    await createNotification({
      title: notification.title,
      message: notification.message,
      type: notification.type,
    });

    await refetch();
    toast.success("Notification sent successfully");
  };

  // When we are fetching data need to show loader
  if (loading) return <FullscreenLoader />;

  return (
    <>
      <div className="h-screen bg-green-200 flex justify-center items-center">
        <div className="min-w-96 p-5 bg-gray-400 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="">Notifications</h1>
            <Link to={"/notifications"} className="relative cursor-pointer">
              {notificationCount && (
                <span className="absolute right-0 size-2.5 bg-yellow-500 inline-block rounded-full"></span>
              )}
              <img src={BellIcon} alt="notification-icon" width={40} />
            </Link>
          </div>
          {data.map((notification) => (
            <NotificationCard
              key={notification.title}
              notification={notification}
              handleSendNotification={sendNotification}
            />
          ))}
        </div>
      </div>
    </>
  );
};
