import admin from "../../../firebase/firebaseAdminConfig";

export default async function handler(req, res) {
  const firestoreAdmin = admin.firestore();

  return new Promise((resolve, reject) => {
    firestoreAdmin
      .collection("products")
      .where("popular", "==", true)
      .get()
      .then((items) => {
        res.status(200).json({
          products: items.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return {
              ...data,
              id,
            };
          }),
        });
        res.end();
        resolve();
      })
      .catch((e) => {
        res.status(405).json(e);
        res.end();
        resolve();
      });
  });
}
