export type NotificationCardProps = {
  notification: { id: number; title: string; message: string; type: string };
  handleSendNotification: (id: number) => void;
};

export type NotificationDetailItemProps = {
  title: string;
  message: string;
  isViewed: boolean;
  timestamp: Date;
};
