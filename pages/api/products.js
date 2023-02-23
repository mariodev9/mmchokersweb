import {
  getAllProducts,
  mapFromFirebaseToProductObject,
} from "../../firebase/services/products";
import {
  collection,
  query,
  getDocs,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "../../firebase/firebaseConfig";

export default function handler(req, res) {
  const q = query(
    collection(firestore, "products"),
    orderBy("createdAt", "desc")
  );
  const querySnap = getDocs(q);
  onSnapshot(q, (querySnap) => {
    const { docs } = querySnap;
    const allProducts = docs.map(mapFromFirebaseToProductObject);
    if (allProducts) {
      res.status(200).json({ productos: allProducts });
    } else {
      response.status(404).json({ message: `No hay productos` });
    }
  });
}
