import { getDocs } from "firebase/firestore";
import { notificationRef } from "../../../config/firebase";

export async function getAllNotifications() {
  try {
    const querySnapshot = await getDocs(notificationRef);
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    throw { message: "Something went wrong!" };
  }
}
