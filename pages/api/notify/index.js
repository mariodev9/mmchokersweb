import mercadopago from "mercadopago";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";

mercadopago.configure({
  access_token: `${process.env.MERCADOPAGO_ACCES_TOKEN}`,
});

const handler = async (req, res) => {
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
      // description,  date_approved payment_method_id payment_type_id status_detail buyer: llenar data
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
      // Guardar en firebase el pago y el estado del pago
      const docRef = await addDoc(collection(firestore, "sales"), {
        firestorePayment,
      });
      console.log("Body del pago:", payment.body);
      // console.log(`Estado del pago: ${paymentStatus}`);
      // console.log("la info ", payment.body.additional_info.payer);
    }
  } catch (error) {
    res.send(error);
  }
};

export default handler;
