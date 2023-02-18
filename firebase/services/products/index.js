import { firestore } from "../../firebaseConfig";
import {
  collection,
  query,
  getDocs,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export const getAllProducts = async () => {
  // const q = query(
  //   collection(firestore, "products"),
  //   orderBy("createdAt", "desc")
  // );
  // const querySnap = await getDocs(q);
  // onSnapshot(q, (querySnap) => {
  //   const { docs } = querySnap;
  //   const allProducts = docs.map(mapFromFirebaseToProductObject);
  //   return allProducts;
  // });
};

export const mapFromFirebaseToProductObject = (doc) => {
  const data = doc.data();
  const id = doc.id;
  const { createdAt } = data;

  return {
    ...data,
    id,
  };
};
