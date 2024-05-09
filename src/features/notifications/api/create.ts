import { Timestamp, addDoc } from "firebase/firestore";
import { notificationRef } from "../../../config/firebase";

export type CreateNotificationDTO = {
  title: string;
  message: string;
  type: string;
};

// Create new notification in firestore
export async function create({ title, message, type }: CreateNotificationDTO) {
  try {
    // Notification data
    const data = {
      title,
      message,
      isViewed: false,
      timestamp: Timestamp.fromDate(new Date()),
      recipientId: "9Ce2cFRNX0WanQMa5aV8",
      senderId: "9Ce2cFRNX0WanQMa5aV8",
      type,
      metadata: {},
    };
    return await addDoc(notificationRef, data);
  } catch (error) {
    throw { message: "Something went wrong!" };
  }
}
