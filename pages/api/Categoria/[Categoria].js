import {
  collection,
  query,
  getDocs,
  onSnapshot,
  where,
} from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";

// Obtengo productos por CATEGORIA

export default async function handler(request, response) {
  const param = request.query.Categoria;

  const q = query(
    collection(firestore, "products"),
    where("category", "array-contains", param)
  );

  const querySnapshot = await getDocs(q);
  let productList = [];

  querySnapshot.forEach((productSnapshot) => {
    const chokerData = productSnapshot.data();
    const productToPush = {
      id: productSnapshot.id,
      ...chokerData,
    };

    productList.push(productToPush);
  });

  return response.json(productList);
}
