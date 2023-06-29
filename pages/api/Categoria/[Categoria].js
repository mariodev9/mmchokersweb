// import verifyRequestOrigin from "../../../api/verifyRequestOrigin";
import admin from "../../../firebase/firebaseAdminConfig";

export default async function handler(req, res) {
  const param = req.query.Categoria;
  const firestoreAdmin = admin.firestore();

  // await verifyRequestOrigin(req);

  const requestHost = req.headers.host;
  const requestProtocol = req.headers["x-forwarded-proto"] || "http";
  const requestOrigin = `${requestProtocol}://${requestHost}`;

  return new Promise((resolve, reject) => {
    firestoreAdmin
      .collection("products")
      .where("category", "array-contains", param)
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
          requestOrigin,
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
