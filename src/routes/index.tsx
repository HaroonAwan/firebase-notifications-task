import { Navigate, Route, Routes } from "react-router-dom";
import { Notifications } from "../features/notifications/routes/Notifications";
import { NotificationDetails } from "../features/notifications/routes/NotificationDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Notifications />} />
      <Route path="/notifications" element={<NotificationDetails />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
