import mercadopago from "mercadopago";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";

mercadopago.configure({
  access_token: `${process.env.MERCADOPAGO_ACCES_TOKEN}`,
});

const handler = async (req, res) => {
  const { query } = req;

  const topic = query.topic || query.type;

  // console.log({ query, topic }, "Notificacion!");
  try {
    if (topic === "payment") {
      const paymentId = query.id || query["data.id"];
      let payment = await mercadopago.payment.findById(Number(paymentId));
      let paymentStatus = payment.body.status;
      // description,  date_approved payment_method_id payment_type_id status_detail buyer: llenar data
      const firestorePayment = {
        paymentId: payment.body.id,
        paymentStatus,
      };
      // Guardar en firebase el pago y el estado del pago
      const docRef = await addDoc(collection(firestore, "sales"), {
        firestorePayment,
      });
      console.log("Id del pago:", payment.body.id);
      console.log(`Estado del pago: ${paymentStatus}`);
      console.log(payment.body.buyer);
    }
  } catch (error) {
    res.send(error);
  }
};

export default handler;
