import { getDocs, query, where } from "firebase/firestore";
import { notificationRef } from "../../../config/firebase";

export async function getUnviewedNotificationCount() {
  try {
    const unviewedNotifications = query(
      notificationRef,
      where("isViewed", "==", false)
    );
    const querySnapshot = await getDocs(unviewedNotifications);
    return querySnapshot.size || false;
  } catch (error) {
    throw { message: "Something went wrong!" };
  }
}
