import verifyRequestOrigin from "../../../auth/verifyRequestOrigin";
import admin from "../../../firebase/firebaseAdminConfig";

export default async function handler(req, res) {
  let { limit } = req.query;
  const limitNumberProducts = parseInt(limit);
  const firestoreAdmin = admin.firestore();
  const verified = await verifyRequestOrigin(req);

  if (verified.status != 403) {
    return new Promise((resolve, reject) => {
      firestoreAdmin
        .collection("products")
        .orderBy("createdAt", "desc")
        .limit(limitNumberProducts || 30)
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
  } else {
    res.status(403).json({ message: "No autorizado" });
  }
}
