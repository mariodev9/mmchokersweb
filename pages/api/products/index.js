import {
  collection,
  query,
  getDocs,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";

export default async function handler(req, res) {
  let limitProducts = req.query.limit;

  const productsRef = collection(firestore, "products");

  const q = query(
    productsRef,
    orderBy("createdAt", "desc"),
    limit(limitProducts)
  );

  const querySnap = await getDocs(q);

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
      response.status(404).json({ message: `404 not found` });
    }
  });
}
