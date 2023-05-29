import {
  collection,
  query,
  getDocs,
  onSnapshot,
  where,
} from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";

// Obtengo productos por CATEGORIA

export default function handler(req, res) {
  const param = req.query.Categoria;

  const q = query(
    collection(firestore, "products"),
    where("category", "array-contains", param)
  );
  const querySnap = getDocs(q);
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
    if (allProducts) {
      res.status(200).json({
        products: allProducts,
        message: `Productos obtenidos con exito`,
      });
    } else {
      response.status(404).json({ message: `No hay productos` });
    }
  });
}
