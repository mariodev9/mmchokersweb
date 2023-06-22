import mercadopago from "mercadopago";

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

      // Guardar en firebase el pago y el estado del pago
      console.log([payment, paymentStatus]);
      console.log(`Estado del pago: ${paymentStatus}`);
    }
  } catch (error) {
    res.send(error);
  }
};

export default handler;
