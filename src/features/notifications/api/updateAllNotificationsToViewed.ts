import { getDocs, updateDoc } from "firebase/firestore";
import { notificationRef } from "../../../config/firebase";
export async function updateAllNotificationsToViewed() {
  try {
    const querySnapshot = await getDocs(notificationRef);
    querySnapshot.forEach((doc) => {
      updateDoc(doc.ref, { isViewed: true });
    });
  } catch (error) {
    throw { message: "Something went wrong!" };
  }
}
