import {
  collection,
  query,
  getDocs,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";

export default function handler(req, res) {
  // QUERY que obtiene todos los productos
  const q = query(
    collection(firestore, "products"),
    orderBy("createdAt", "desc")
  );

  // ejecuto la QUERY
  const querySnap = getDocs(q);

  // Devuelvo todos los productos con su respectivo Id.
  onSnapshot(q, (querySnap) => {
    const { docs } = querySnap;
    const allProducts = docs.map((doc) => {
      const data = doc.data();
      const id = doc.id;
      return {
        ...data,
        id,
      };
    });

    // Devuelvo los productos
    if (allProducts) {
      res.status(200).json({ productos: allProducts });
    } else {
      // No hay productos
      response.status(404).json({ message: `No hay productos` });
    }
  });
}
