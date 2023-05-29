import {
  collection,
  query,
  getDocs,
  onSnapshot,
  where,
} from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";

export default async function handler(request, response) {
  const q = query(
    collection(firestore, "products"),
    where("category", "array-contains", "Chokers")
  );

  const chokersSnapshot = await getDocs(q);
  let allChokers = [];

  chokersSnapshot.forEach((chokerSnapshot) => {
    const chokerData = chokerSnapshot.data();
    const chokerToPush = {
      id: chokerSnapshot.id,
      ...chokerData,
    };

    allChokers.push(chokerToPush);
  });

  return response.json(allChokers);
}
