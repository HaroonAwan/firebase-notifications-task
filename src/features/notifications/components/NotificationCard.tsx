import { Button } from "../../../components/Button";
import { NotificationCardProps } from "../types";

export const NotificationCard = ({
  notification,
  handleSendNotification,
}: NotificationCardProps) => {
  const { id, title } = notification;

  return (
    <div className="flex items-center justify-between bg-white px-4 py-2 rounded-xl">
      <h1 className="font-bold">{title}</h1>
      <Button
        variant="primary"
        extraClasses="w-24"
        onClick={() => handleSendNotification(id)}
      >
        Send
      </Button>
    </div>
  );
};
