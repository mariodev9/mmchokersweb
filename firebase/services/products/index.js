import { firestore } from "../../firebaseConfig";
import {
  collection,
  query,
  getDocs,
  orderBy,
  onSnapshot,
  doc,
} from "firebase/firestore";

export const getProduct = async (productoId, setProductData) => {
  const productDataRef = doc(firestore, "products", `${productoId}`);

  onSnapshot(productDataRef, (docSnap) => {
    if (docSnap.exists()) {
      setProductData(docSnap.data());
    } else {
      setProductData(false);
    }
  });
};

export const mapFromFirebaseToProductObject = (doc) => {
  const data = doc.data();
  const id = doc.id;
  // const { createdAt } = data;

  return {
    ...data,
    id,
  };
};
