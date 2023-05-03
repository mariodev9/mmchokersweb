import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  try {
    const data = req.body;
    const docRef = await addDoc(collection(firestore, "sales"), data);
    const { id } = docRef;
    res.status(200).json({
      saleId: id,
    });
  } catch (error) {}
}
