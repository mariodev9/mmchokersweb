import mercadopago from "mercadopago";
import admin from "../../../firebase/firebaseAdminConfig";

mercadopago.configure({
  access_token: `${process.env.MERCADOPAGO_ACCES_TOKEN}`,
});

const handler = async (req, res) => {
  const firestoreAdmin = admin.firestore();

  const { query } = req;

  console.log("Se ejecuto");

  const topic = query.topic || query.type;
  // console.log({ query, topic }, "Notificacion!");
  try {
    if (topic === "payment") {
      const paymentId = query.id || query["data.id"];
      let payment = await mercadopago.payment.findById(Number(paymentId));
      let paymentStatus = payment.body.status;
      let transactionDetails = payment.body.transaction_details;

      const firestorePayment = {
        id: payment.body.id,
        status: paymentStatus,
        buyerForm: payment.body.additional_info.payer,
        buyerCard: payment.body.payer,
        transaction: {
          totalAmount: transactionDetails.total_paid_amount,
          paidAmount: transactionDetails.net_received_amount,
        },
      };

      // console.log("agregar", firestorePayment);

      // Guardar en firebase el pago y el estado del pago
      try {
        const salesRef = firestoreAdmin.collection("sales");
        const docRef = await salesRef.add(firestorePayment);
        console.log("Producto agregado con ID:", docRef.id);
      } catch (error) {
        console.error("Error al agregar el producto:", error);
      }
    }
  } catch (error) {
    res.send(error);
  }
};

export default handler;
