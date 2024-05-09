import { NotificationDetailItemProps } from "../types";

export const NotificationDetailItem = ({
  title,
  message,
  isViewed,
}: NotificationDetailItemProps) => {
  return (
    <div className="flex justify-between bg-red-100 p-3 rounded-xl">
      <div>
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm">{message}</p>
      </div>
      <div className="relative">
        {!isViewed && (
          <span className="absolute right-0 size-2.5 bg-yellow-700 inline-block rounded-full"></span>
        )}
      </div>
    </div>
  );
};
