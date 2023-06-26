import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";

export const addSale = (data) => {
  try {
    const docRef = addDoc(collection(firestore, "sales"), {
      data,
    }).then(console.log("se vendio"));
  } catch (error) {
    error;
  }
};
