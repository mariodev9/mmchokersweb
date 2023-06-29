import admin from "../../../firebase/firebaseAdminConfig";
import verifyRequestOrigin from "../../../auth/verifyRequestOrigin";

export default async function handler(req, res) {
  const productId = req.query.id;
  const firestoreAdmin = admin.firestore();
  const verified = await verifyRequestOrigin(req);

  if (verified.status != 403) {
    return new Promise((resolve, reject) => {
      const docRef = firestoreAdmin.doc(`products/${productId}`);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            const id = doc.id;
            res.status(200).send({
              ...data,
              id,
            });
          } else {
            res.status(404).send({
              error: "Documento no encontrado",
            });
          }
        })
        .catch((error) => {
          console.error("Error al obtener el documento:", error);
        });
    });
  } else {
    res.status(403).json({ message: "No autorizado" });
  }
}
